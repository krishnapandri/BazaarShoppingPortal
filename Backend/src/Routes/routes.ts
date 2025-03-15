import {Router} from 'express';
import { AppDataSource } from '../data-source';
import { uploadArray, uploadSingle } from '../Utils/multerUtils';
import { AddProductReview, CheckProductExists, CreateProduct, EditProduct, GetAllProductReviews, GetAllProducts } from '../Controller/productController';
import { CheckCategoryExists, CreateCategory, EditCategory, GetAllCategory } from '../Controller/cateogryController';

const router = Router();
export type ProductType = {
        name:string,
        category_id:number,
        subcategory_id:number,
        img:string,
        description:string,
        tags:string,
        regularprice:number,
        saleprice:number,
        stock:number
}
export class CommonResponse{
    constructor(private message:string,private issucess:boolean,private error:string='',private others:Record<string,string>={}){
        if(!issucess && this.error.trim() !== '')
            this.message = this.error;
    };
}
export class CommonResponseRecord<T>{
    constructor(private message:T,private issucess:boolean,private error:string='',private others:Record<string,string>={}){};
}
export type RequestFile  = Express.Multer.File;


export const DataSource = AppDataSource.manager;

router.get('/checkproductexists',CheckProductExists)

router.post("/createProduct",uploadArray('img'),CreateProduct);

router.patch("/editProduct/:ID",uploadArray('img'),EditProduct);
  
router.get('/getAllProducts',GetAllProducts);

router.get('/AddProductReview',AddProductReview);

router.get('/getproductreviews',GetAllProductReviews);

/* Category */

router.get('/checkcategoryexists',CheckCategoryExists)

router.post("/createcategory",uploadSingle('img'),CreateCategory);

router.patch("/editcategory/:ID",uploadSingle('img'),EditCategory);
  
router.get('/getallcategory',GetAllCategory);

// router.get('/AddProductReview',AddProductReview);



export default router;