import { PageHeader } from "../pageHeader";
import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem, Box, Typography, Grid } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { fetchData, postData, postDataImg } from "../../Utils/AxiosUtils";
import { showError, showNotification, showSuccess, showWarning } from "../../Notification/Notification";


export const CreateProduct = () => {

  const [Categories,SetCategories] = useState([]);
  let IsLoadingData = false;
  useEffect(()=>{
    if(IsLoadingData)return;
    (async ()=>{
      try {
        IsLoadingData = true;
        const response = await fetchData('getallcategory',{});
        if(response.status === 200){
          SetCategories(response.data.message);
          showSuccess("data retrieved successfully");
          console.log(response.data.message)
        }
      } catch (error) {      }
      finally{
        IsLoadingData = false;
      }
    }
  )();
  },[])
  
  
  const ProductForm = () => {
    const InitialForm = {
      name: "",
      category: "",
      category_id:0,
      subcategory_id:0,
      subcategory:'',
      description: "",
      stock: "",
      tags: "",
      regularprice: "",
      saleprice: "",
      img: [],
    };
    const [product, setProduct] = useState(InitialForm);
  
    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
          const filePreviews = acceptedFiles.map((file) =>Object.assign(file, { preview: URL.createObjectURL(file) }));
          // const filePreviews = acceptedFiles.map(file => ({...file,preview: URL.createObjectURL(file)}));
          //setProduct((prev) => ({ ...prev, files: acceptedFiles }))
          setProduct((prev) => ({ ...prev, img: [...prev.img, ...filePreviews] }));   
      },
    });
  
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const res = await postDataImg('createProduct',product);
          if(res.issucess){
            showSuccess(res.message);
            setProduct(InitialForm);
          }
          else 
            showWarning(res.message);
      } catch (error) {
        showError(error.message);        
      }
    };
  
    const DeleteImgFromPreview = (productArg) => {
      product.img = product.img.filter(x=>x !== productArg);
      setProduct({...product});
    }
  
    return (
      <Box sx={{ width: '100%', margin: "auto", p: 4, bgcolor: "white", boxShadow: 3, borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField fullWidth label="Name" name="name" slotProps={{htmlInput:{maxLength:99}}} value={product.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth select label="Select Category" name="category_id" value={product.category_id} onChange={handleChange}>
              {Categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
  
          <Grid item xs={12}>
            <Box {...getRootProps()} sx={{ border: "2px dashed #ccc", p: 4, textAlign: "center", cursor: "pointer", borderRadius: 2 }}>
              <input {...getInputProps()} />
              <Typography>Drop file here or click to upload</Typography>
              <Button variant="contained" sx={{ mt: 1 }}>Select Files</Button>
            </Box>
            {product.img.length > 0 && <Typography sx={{ mt: 1 }}>{product.img.length} file(s) selected</Typography>}
            {product.img.length > 0 && (<Typography sx={{ m:0 }}>{product.img.map((x, index) => <span key={index}>{x.name}<br /></span>)}<span>files</span></Typography>)}
            <div>
              <div style={{borderRadius:'10px'}} className="d-flex gap-2">
                  {product.img.map((prod, index) => (
                      <div className="position-relative" style={{border: '2px solid black',borderRadius:' 15px',overflow:' hidden'}}>
                          <span style={{cursor:'pointer',position: 'absolute',zIndex: 1,color: 'white',right:6,top:0}} onClick={()=>DeleteImgFromPreview(prod)} >X</span>
                          <Box key={index} sx={{ height: 80,width:80, overflow: "hidden", borderRadius: 1, boxShadow: 2 }}>
                              <img src={prod.preview} alt="Upload Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </Box>
                      </div>
                  ))}
              </div>
            </div>
          </Grid>
  
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={3} slotProps={{htmlInput:{maxLength:999}}} label="Description" name="description" value={product.description} onChange={handleChange} />
          </Grid>
  
          <Grid item xs={6}>
            <TextField fullWidth label="Stock" name="stock" type="number" slotProps={{htmlInput:{maxLength:999}}} value={product.stock} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Tags" name="tags" value={product.tags} onChange={handleChange} slotProps={{htmlInput:{maxLength:999}}} />
          </Grid>
  
          <Grid item xs={6}>
            <TextField fullWidth label="Regular Price" name="regularprice" type="number" value={product.regularprice} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Sale Price" name="saleprice" type="number" value={product.saleprice} onChange={handleChange} />
          </Grid>
  
          <Grid item xs={2}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
              Save Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };


    return <>
        <PageHeader/>
        <div style={{height:'15vh'}}></div>
        <div className="px-3">
            <div className="pt-3 pb-2">
                <h3 style={{fontSize:'1.5rem',padding:'5px 0px'}}>Add New Product</h3>
                <ProductForm/>
            </div>
        </div>
    </>
}








// export default ProductForm;