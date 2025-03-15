import { Request, Response, NextFunction, query } from "express";
import { AppDataSource } from "../data-source";
import { Images } from "../entity/Images";
import { Options } from "../entity/Options";
import { columnProps, Product } from "../entity/Product";
import { CommonResponse, CommonResponseRecord, ProductType, RequestFile } from "../Routes/routes";
import { Not, In } from "typeorm";
import {DataSource} from '../Routes/routes'
import { Reviews } from "../entity/Reviews";
import { deleteFileFromUploads } from "./cateogryController";
import { WriteErrorToDB } from "../Utils/ErrorLogUtils";
import {env} from 'process'

const FTPURL = `https://res.cloudinary.com/dfhosrqqo/image/upload/`;
const webURL = `${env.APPDOMAIN}:${env.PORT}/`;
 
export const CreateProduct = async (req:Request, res:Response,next:NextFunction):Promise<any> => {
  const formData = (req.body as ProductType);
  let product;
    try {
        //#region   Validations
        let valiationString:string = "";
        if(formData.category_id === 0)
            valiationString = 'Category can\t be empty'; 
        else if((req.files as Express.Multer.File[]).some((x:Express.Multer.File)=>x.filename.substring(0,4) === 'cat_') )
            valiationString = 'Product image cannot start with `cat_` please rename the file and upload again'; 
        /* else if(formData.subcategory_id === 0)
            valiationString = 'Subcategory can\t be empty'; 
        else if(formData.subcategory_id === 0)
            valiationString = 'Subcategory can\t be empty';  */
        if(valiationString.trim() !== ''){
            res.send(new CommonResponse(valiationString,false));
            deleteFileFromUploads(...(req.files as RequestFile[])?.map((x:RequestFile)=>x.filename));
            return; 
        }
        //#endregion
        // const opt = new Options();
        product = new Product();
        product.categoryId = formData.category_id;
        product.subCategoryId = formData.subcategory_id;
        product.brandId = 0;
        product.name = formData.name;
        product.code = formData.name;
        product.desc = formData.description;
        product.avgPrice = formData.regularprice;
        product.salesPrice = formData.saleprice;
        product.isActive = 0; // just keep the draft status
        product.Tags = formData.tags;
        product.stockCount = formData.stock;
        const result = await AppDataSource.manager.save(product);
        const ImagesToSave = (req.files as Express.Multer.File[]).map(reqFiles=>{
            const img = new Images();
            img.productId = result.id;
            img.isActive = 1;
            img.link = reqFiles.filename;
            img.optionId = 0;
            img.isUplodedToCloud = 0;
            return img;
        })
        await AppDataSource.manager.save<Images>(ImagesToSave);
        res.send(new CommonResponse("Data Saved SuccessFully..!!",true));
    } catch (error) {
        if(product && product.id > 0){
            product.isActive = 0;
            AppDataSource.manager.save(product);
        }
        if((req.files?.length as number)>0)
            deleteFileFromUploads(...(req.files as RequestFile[])?.map((x:RequestFile)=>x.filename));
        next(error);       
    }
}

export const EditProduct =  async (req:Request, res:Response,next:NextFunction):Promise<any> => {
    const productID = +(req.params.ID as string);
    const formData = (req.body as ProductType);
    req.files = req.files as RequestFile[];
      try {
        const product = await AppDataSource.manager.findOne(Product,{where:{id:productID}});
        if(!product)
            return res.status(500).send(`Product Doesn't exists!!`);
        columnProps.forEach(prop=>product[prop] = formData[prop]);
        delete product.id;
        const result = await AppDataSource.manager.update(Product,{id:productID},product);
     /*    await AppDataSource.manager.query(`
            UPDATE Product SET Category_ID=$1,SubCategory_ID=$2,Brand_ID=$3,Name=$4,Code=$5,[Desc]=$6,AvgPrice=$7,SalePrice=$8,IsActive=$9,Tags=$10 
            WHERE ID = $11    
        `,[...Object.values(formData),productID]) */
        if((!req.files) || (req.files.length as number<=0)){
            await AppDataSource.manager.update(Images,{productId:productID},{isActive:0});
            return res.send(new CommonResponse('Data Updated SuccessFully',true));
        }
        let ImagesInDB = await AppDataSource.manager.findBy(Images,{productId:productID,isActive:1});
        if((req.files.length as number) > 0){
            // const result = await DataSource.query(`UPDATE Images SET  isactive = 0 WHERE product_ID = $1 AND IsActive = 0 AND Option_ID = 0 link NOT IN ($2)`,[productID,(req.files as any[]).map((x : RequestFile)=>x.originalname)]);
            const ImagesNotInDB =  req.files.filter((x:RequestFile)=>ImagesInDB.findIndex(o=>o.link === x.filename) === -1);
            await DataSource.getRepository(Images)
            .update(
              (  {
                  productId: productID,
                  isActive: 1,
                  optionId: 0,
                  link: Not(In(req.files.map((file) => file.filename)))
                } 
            ),
                { isActive: 0 }
            );
            // const fileNames = req.files.map((file) => `'${file.originalname.replace(/'/g, "''")}'`).join(', ');
            // const placeHolder = req.files.map((_,index) =>'$'+ `${index+2}`).join(',');
            // const fileNames = req.files.map(x=>`'${x.originalname}'`);
          /*   await DataSource.query(
                `
                UPDATE Images  
                SET  isactive = 0 
                WHERE product_ID = $1
                AND  isactive = 1 
                AND  option_ID = 0 
                AND Link NOT IN (${placeHolder})
                `,[productID,...fileNames]
            ); */

          /*   await DataSource.createQueryBuilder()
                .update(Images)
                .set({ isactive: 0 })
                .where("product_ID = :productID", { productID })
                .andWhere("isactive = 1")
                .andWhere("option_ID = 0")
                .andWhere("link NOT IN (:...fileNames)", { fileNames })
                .execute(); */
           
                  
            if(ImagesNotInDB.length>0){
                const imagesToinsert :Images[] = ImagesNotInDB.map(x=>{
                    const image = new Images();
                    image.isActive=1;
                    image.link = x.filename;
                    image.productId = productID;
                    image.optionId= 0;
                    return image;
                });
                DataSource.save(imagesToinsert);
            }
        }
        // const RES = await AppDataSource.query(`UPDATE Images SET IsActive = 0 WHERE ID IN ($1) `,Idlist)
        res.send(new CommonResponse('Data Updated SuccessFully',true));
    } catch (error) {
        deleteFileFromUploads(...(req.files as RequestFile[]).map((x:RequestFile)=>x.filename));
        next(error);       
    }
}

export const GetAllProducts =  async (req:Request,res:Response)=>{
    let pageno = Number(req.headers.pageno);
    let noofrecords = Number(req.headers.noofrecords);
    pageno==0 && (pageno = 1);
    const offset = (pageno as number - 1 ) * (noofrecords as number);
    try {
        // Fetch all products
        let sqlQuery = `
        SELECT 
        p.id as product_id,
        p.Name as name,
        c.id as category_id,
        ISNULL(c.name, '') as category, 
        b.BrandName,
        ISNULL(MAX(B.BrandImage), '') As brandimg,
        p.SalePrice AS price,
        p.AvgPrice,
        p.IsActive AS published,
        ((CASE WHEN I.IsUploadedToCloud = 1 THEN '${FTPURL}' ELSE '${webURL}' END ) + ISNULL(MAX(i.Link), '')) AS img
        FROM product P
        LEFT JOIN Categories C ON C.ID = P.Category_ID
        LEFT JOIN Subcategories S ON S.ID = P.SubCategory_ID
        LEFT JOIN Brand B ON B.ID = P.Brand_ID  
        LEFT JOIN Images I ON I.Product_ID = P.ID AND I.IsActive = 1
        LEFT JOIN Options O ON O.Product_ID = P.ID
        WHERE P.isactive IN (@0,@1) 
        GROUP BY 
            p.id, p.Name, c.Name, c.id, b.BrandName, p.SalePrice, p.AvgPrice, p.IsActive,i.IsUploadedToCloud
        ORDER BY p.id desc
        OFFSET @2 ROWS  
        FETCH NEXT @3 ROWS ONLY;
        `;
        const products = await AppDataSource.query(sqlQuery,[1,0,+offset,+noofrecords]);// - 1 means deleted, 0-not published,1-published.
        if(pageno===1){
            sqlQuery = `SELECT COUNT(*) AS total_count
                        FROM product P
                        WHERE P.isactive IN (@0, @1);`
            const totalRowCount:any[] = await AppDataSource.query(sqlQuery,[1,0]);// - 1 means deleted, 0-not published,1-published.
            if(totalRowCount && totalRowCount.length>0)
                res.send(new CommonResponseRecord<{products:Product[],totalRowCount:number}>({products,totalRowCount:totalRowCount[0].total_count},true));
            else 
                res.send(new CommonResponseRecord<{products:Product[],totalRowCount:number}>({products,totalRowCount:0},true));
            return; 
        }
        res.send(new CommonResponseRecord<Product[]>(products,true));
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const CheckProductExists = (req:Request,res:Response)=>{
    const productName = (req.headers.ProudctName as string);
     AppDataSource.manager.findOneBy(Product,{name:productName})
     .then((alreadyExistingProduct)=>{
        res.status(200).send(new CommonResponse("Product With Name '"+productName + "' already exists!",true));
     })
     .catch((error:Error)=>{
        res.status(500).send(new CommonResponse("Error Occurred!!",false,error.message));
     });
}

export const AddProductReview = async (req:Request,res:Response)=>{
    const {customerID=0,productID=0,desc="",rating=0} = req.body;
    if(!customerID || !productID){
        res.send(new CommonResponse(` ${!customerID ? "Customer" : "Product"} ID can't be zero`,false));
        return; 
    }
    const revObj = new Reviews();
    revObj.productId = productID;
    revObj.customerId = customerID;
    revObj.desc = desc;
    revObj.isActive=1;
    revObj.optionId = 0;
    revObj.rating=rating;
    await DataSource.save(revObj);
    res.send(new CommonResponse("Data Saved SuccessFully",true));
}

export const GetAllProductReviews = async (req:Request,res:Response,next:NextFunction)=>{
    const {pageNo=null,customerSearch=null,noOfRecords=10} = req.body;
    if((pageNo===null) || (customerSearch==null)){
        res.send(new CommonResponse('Incomplete Request Parameters..!!',false));
        return;
    }
    const sqlQuery = `

            DECLARE @PageNo AS INT = ${pageNo};
            DECLARE @NoOfRecords AS Smallint = ${noOfRecords};
            DECLARE @StartRow as INT = ((@pageno-1)*@NoOfRecords) + 1;
            DECLARE @EndRow as INT = @pageno * @NoOfRecords;
            DECLARE @customerName as VARCHAR = '${customerSearch}';

            WITH ReviewData AS (
                SELECT 
                    RE.[Desc],
                    RE.Rating,
                    RE.IsActive AS IsPublished,
                    ISNULL(PR.Name,'') AS ProductName,
                    I.Link AS ProductImg,  
                    ISNULL(CP.Name,'') AS CustomerName,
                    ROW_NUMBER() OVER (ORDER BY RE.ID DESC) AS RowNum  
                FROM Reviews RE
                LEFT JOIN Product PR ON PR.ID = RE.Product_ID AND PR.IsActive = 1  
                LEFT JOIN Options O ON O.ID = RE.Option_ID
                LEFT JOIN CustomerProfile CP ON CP.ID = RE.Customer_ID --AND CP.IsActive = 1  
                OUTER APPLY (
                    SELECT TOP 1 I.Link 
                    FROM Images I 
                    WHERE I.Product_ID = PR.ID 
                    ORDER BY I.ID
                ) I
                WHERE (@customerName = '' OR CP.Name LIKE @customerName) 
            )
            SELECT * FROM ReviewData WHERE RowNum BETWEEN @StartRow AND @EndRow;  
        `;
    try {
        const result =  await DataSource.query(sqlQuery);
        res.send(new CommonResponse(result,true));
    } catch (error) {
        console.log(error);        
        WriteErrorToDB(0,0,error,__filename,'GetAllProductReviews',sqlQuery,'/getproductreviews');
        next(error);
    }
}