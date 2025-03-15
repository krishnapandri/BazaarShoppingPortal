import { Request, Response, NextFunction } from "express";
import { CommonResponse, RequestFile, CommonResponseRecord } from "../Routes/routes";
import { Categories } from "../entity/Categories";
import { AppDataSource } from "../data-source";
import { UploadImageLog } from "../entity/UploadImageLog";
import fs from 'fs';
import path from "path";
import { uploadDir } from "../Utils/CloudinaryUtil";
import {v2 as cloudinary} from  'cloudinary';

const db = AppDataSource.manager;

type CategoryType = {
    name:string,
    isfeatured:number,
    isactive:number
}

export const CreateCategory = async (req:Request, res:Response,next:NextFunction):Promise<any> => {
  const formData = (req.body as CategoryType);
    try {
        //#region   
        if(req.file.filename?.substring(0,4) !== 'cat_')
            return res.send(new CommonResponse('Image name should start with `cat_`.',false));
        //#endregion
        const ImageAlreadyExists =  await checkImageExistsOnCloud(req.file.filename);
        if(ImageAlreadyExists)
            return res.send(new CommonResponse('Images name already exists try using different image name..!!',false));
        const catObj:Categories =  await db.findOne(Categories,{where:[{name:formData.name}]})//,{isfeatured:1}
        if(catObj.name === formData.name)
            return res.send(new CommonResponse('Duplicate Category Name...!!',false));
       /*  else if(catObj.isfeatured === 1)
            return res.send(new CommonResponse('Only One Featured Category Allowed...!!',false)); */
        const category = new Categories();
        category.name = formData.name;
        category.img = req.file.filename;
        category.isfeatured = formData.isfeatured;
        category.isImgUplodedToCloud = 0;
        await db.save(category);
        res.send(new CommonResponse("Data Saved SuccessFully..!!",true));
    } catch (error) {
        next(error);       
    }
}

export const EditCategory =  async (req:Request, res:Response,next:NextFunction):Promise<any> => {
    const categoryID = +(req.params.ID as string);
    const {isactive,isfeatured,name} = (req.body as CategoryType);
    req.file = req.file as RequestFile;
      try {
        const category = await db.findOne(Categories,{where:{id:categoryID}});
        if(!category)
            return res.send(new CommonResponse('Category Doesn\'t exists!!',false));
        if((name as string).trim()==='')
            return res.send(new CommonResponse('Category name can\'t be empty!!',false));
        await db.update(Categories,{id:categoryID},{img:req.file.filename,isActive:isactive,name:name,isfeatured:isfeatured});
        if(category.isActive === 0)
            cloudinary.api.delete_resources([path.parse(req.file.filename).name]);
        res.send(new CommonResponse('Data Updated SuccessFully..!!',true));
    } catch (error) {
        deleteFileFromUploads(req.file.filename);
        next(error);       
    }
}

export const GetAllCategory =  async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const categories:Categories[] = await db.find(Categories,{where:{isActive:1}});
        res.send(new CommonResponseRecord<Categories[]>(categories,true));
    } catch (error) {
        next(error)
    }
}

export const CheckCategoryExists = (req:Request,res:Response)=>{
    const categoryName = (req.headers.categoryName as string);
     db.findOneBy(Categories,{name:categoryName})
     .then((alreadyExistingProduct)=>{
        if(!alreadyExistingProduct)
            res.status(200).send(new CommonResponse("Category With Name '"+categoryName + "' already exists!",false));
        else
            res.status(200).send(new CommonResponse("",true));
     })
     .catch((error:Error)=>res.status(500).send(new CommonResponse("Error Occurred!!",false,error.message)));
}
async function checkImageExistsOnCloud(public_ID: string) {
    return await db.exists(UploadImageLog,{where:{filename:public_ID}});
}

/**
 * @param fliename pass file name with extension which is saved in the uploads folder
*/
export function deleteFileFromUploads(...filenames:string[]){
    filenames.forEach(fileName => fs.unlinkSync(path.join(uploadDir,fileName)));
}