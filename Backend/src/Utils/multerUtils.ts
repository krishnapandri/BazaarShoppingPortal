import { Request } from 'express';
import multer, { Field, StorageEngine } from 'multer';
import path from 'path';
import fs from 'fs'

// Define the storage engine
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'), // Folder to save the uploaded files,
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    // cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    // const fileName = `${path.parse(file.originalname).name}-${uniqueSuffix}${path.extname(file.originalname)}`;
    const fileName = `${path.parse(file.originalname).name}${path.extname(file.originalname)}`;
    cb(null,fileName);
  },
});

// Define the file filter
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if(allowedTypes.includes(file.mimetype))
    cb(null,true);
  else
    cb(new Error('Only .jpeg, .png, and .jpg files are allowed!'))
};

const GenerateIncrementalDuplicates = (file:Express.Multer.File)=>{
    const originalName = path.parse(file.originalname).name; // File name without extension
    const ext = path.extname(file.originalname); // File extension
    let uniqueName = `${originalName}${ext}`; // Initial file name
    let counter = 0;

    // Check if file exists and generate a unique name
    while (fs.existsSync(path.join('./uploads', uniqueName))) {
        counter++;
        uniqueName = `${originalName}(${counter})${ext}`;
    }
    return uniqueName;
}

// Configure Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB size limit
  fileFilter,
});

export const uploadSingle = (fieldName: string) => upload.single(fieldName);
export const uploadMultiple = (fieldNames: Field[]) => upload.fields(fieldNames);
export const uploadArray = (fieldNames: string) => upload.array(fieldNames);
