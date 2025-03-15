import fs from 'fs/promises';
import { v2 as cloudinary} from 'cloudinary';
import path from 'path'
import cron from 'node-cron';
import { Dirent } from 'fs';
import { DataSource } from '../Routes/routes';
import { InactiveImage } from '../entity/InactiveImage';
import { Between, In } from 'typeorm';
import { Images } from '../entity/Images';
import { UploadImageLog } from '../entity/UploadImageLog';
import dotenv from 'dotenv';
import { AppDataSource } from '../data-source';
import { Categories } from '../entity/Categories';
import { Brand } from '../entity/Brand';
import { WritetoErrorFile } from './ErrorLogUtils';
dotenv.config();
const cloud_name= process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_CLOUD_APIKEY;
const api_secret = process.env.CLOUDINARY_CLOUD_APISECRET;
const UploadInterval = '*/5 * * * *'; // every five minutes !!
const DeleteInterval = '0 0 * * *'; // every midnight !!
export const uploadDir = './uploads';

let Files:any[] = [];

export const CloudinaryPublicURl = `https://res.cloudinary.com/${cloud_name}/image/upload/`;

// Initialize Cloudinary
export const CloudinaryUtils = async function () {
    cloudinary.config({
      cloud_name,
      api_key,
      api_secret,
    });
    //const uploadDir = path.join(__dirname, 'uploads'); // Directory to store temporary files
    // Ensure the upload directory exists
    // Ensure the upload directory exists
    let Exists : boolean = await EnsureDirectory(uploadDir); // Check if directory exists
  
    if(!Exists)
        await fs.mkdir(uploadDir,{recursive:true}); // Create directory if it doesn't exist
    
    // Schedule task to upload files to Cloudinary and delete from disk
    cron.schedule(UploadInterval,UploadFilesToCloudinary);

    /* Delete Inactive Images */
    cron.schedule(DeleteInterval,DeleteFilesFromCloudinary);
}

const UploadFilesToCloudinary =  async () => {
  console.log('Running scheduled task for Cloudinary upload...',new Date().toLocaleTimeString());
  const DirFiles:Dirent[] = await fs.readdir(uploadDir,{withFileTypes:true});
  const uploadimg = new UploadImageLog();
  if(!DirFiles ||DirFiles.length<=0 )return;
  try {
    const publicFiles = await GetFilesFromCloudByPublicID(DirFiles.map(x=>x.name));
    Files = publicFiles.resources.map(({display_name})=>display_name);
  } catch (error) {
    WritetoErrorFile(error,__filename,'UploadFilesToCloudinary');
  }
  for (const file of DirFiles) {
    const filePath = path.join(uploadDir, file.name);
    const fileNameWthExtension = path.parse(file.name).name?.trim();
    const ImageAlreadyExists = checkImageExists(fileNameWthExtension);
    if(ImageAlreadyExists){
      DeleteFileAsync(file.name)
      await UpdateImageUploadInDB(file.name); // mark it as uploaded since it already exists.
      console.log("Image Already Exists,Deleting Without Uploading!!");
      continue;
    }
    try {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: 'auto', // Automatically detects file type
        public_id:fileNameWthExtension,
        //folder: 'uploads',          // Optional: specify a folder if needed
      });
      console.log(`File uploaded to Cloudinary: ${result}`);
      uploadimg.filename = file.name;
      //#region implemented solutions for img data get
      await UpdateImageUploadInDB(uploadimg.filename);
      //#endregion
      DeleteFileAsync(file.name);// Delete file from local disk
      console.log(`File deleted from disk: ${file.name}`);
    } catch (error) {
      console.error(`Error uploading file ${filePath}:`, error);
      uploadimg.issucess = 0;
      uploadimg.filename = file.name;
      uploadimg.error = (error?.message as string)?.substring(0,999);
    }
    finally{
      await DataSource.save(UploadImageLog,uploadimg);
    }
  }
}

async function UpdateImageUploadInDB(fileName:string){
  if(fileName.startsWith('cat_')){
    await AppDataSource.query(`UPDATE TOP (1) Categories SET isImgUplodedToCloud = 1 WHERE CAST(CreatedOn AS Date) =  CAST(GETDATE() AS DATE) AND img = @0`,[fileName]);
  }
  else if(fileName.startsWith('br_')){
    await AppDataSource.query(`UPDATE TOP (1) BRAND SET isImgUplodedToCloud = 1 WHERE CAST(CreatedOn AS Date)=  CAST(GETDATE() AS DATE) AND brandImage = @0`,[fileName]);
  }
  else {
    await AppDataSource.query(`UPDATE TOP (1) Images SET IsUploadedToCloud = 1 WHERE CAST(CreatedOn AS DATE) =  CAST(GETDATE() AS DATE) AND link = @0`, [fileName]);
  }
}

async function EnsureDirectory(uploadDir:string){
  let Exists:boolean = false;
  try {
    await fs.access(uploadDir);
    Exists = true;
  } catch (error) { }
  finally{
    return Exists;
  }
}

const DeleteFilesFromCloudinary = async () => {
  console.log("Running Scheduled task for deleting files from cloudinary",new Date().toLocaleTimeString());
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to start of the day
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // Next day
  const results: InactiveImage[] = await DataSource.findBy(InactiveImage, {
    createdOn: Between(today, tomorrow),
  });
  if(results.length<=0){
    console.log("Inactive Images Table is empty!!!");
    return;
  }
  try {
    console.log("Deleting Records from Cloudinary");
    const files = await cloudinary.api.resources(results.map(({cloudimagelink})=> path.parse(cloudimagelink).name));
    if(files && (files.resources as any[]).length<=0)
      return;
    await cloudinary.api.delete_resources(results.map(({cloudimagelink})=> path.parse(cloudimagelink).name));
    console.log("Deleting Records from Inactive Images Tables");
    const idlist =  results.map(({id,imagesid})=>({id,imagesid}));
    await Promise.all([
      DataSource.delete(InactiveImage, { id: In(idlist.map(x => x.id)) }),
      DataSource.delete(Images, { id: In(idlist.map(x => x.imagesid)) }),
    ]);
  } catch (error) {
    console.log("Error While Deleting Records from Cloudinary..",error);
  }
  
}

async function GetFilesFromCloudByPublicID(publicID:string[]){
  return await cloudinary.api.resources({public_ids:publicID});
  //AppDataSource.manager.find(UploadImageLog,{where:{filename:in}  });
}

function checkImageExists(originalname:string) { 
 return Files.findIndex(x=>x === originalname) !== -1;
}

/**
 * @param filenames pass filenames using destructing  
 * */
const DeleteFileAsync = async (...fileNames:string[]) => {
  fileNames.forEach(async fileName => await fs.unlink(path.join(uploadDir,fileName)));
}