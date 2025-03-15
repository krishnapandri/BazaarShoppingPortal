import './ProductDetail.css'
import { Chip } from '@mui/material';
import React, { useState } from "react";
import TabComponent from '../TabComponent/Tab';
import { ProductSuggestion } from '../ProductSuggestionComp/ProductSuggestion';
import ProductCardDetail from '../ProductCardDetail/ProductCardDetail';
import { Box, Button, Typography } from '@mui/material';
import {Rating} from '@mui/material';


const ProductDetail = () => {
  // State for selected options
  const [selectedOptionIndex, setselectedOptionIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(0);
  const [activeIndex,setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

 
  // Dummy Data
  const product = {
    title: "Yellow Casual Sweater",
    price: 244.0,
    rating: 4,
    reviews: 50,
    options: ["option1", "option2", "option3", "option4"],
    types: ["type1", "type2", "type3"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    reviewsData: ["Great product!", "Amazing quality.", "Worth the price."],
    specifications: {
      brand: "Brand Beats",
      model: "S450",
      features: ["Wireless Bluetooth Headset", "FM Frequency Response"],
    },
  };

  const relatedProducts = [
    { name: "Colgate Toothpaste", price: "$3", discount: "15% off" },
    { name: "Catch Masala", price: "$5", discount: "10% off" },
    // Add more related products
  ];

  const frequentlyBoughtTogether = [
    { name: "Premium Grocery Collection", price: "$250" },
    { name: "Premium Grocery Pack", price: "$250" },
    { name: "FreshReal Chole Masala", price: "$250" },
    { name: "Gum Pack", price: "$250" },
  ];

  const availableAt = ["Tech Friend", "Smart Shop", "Gadget 360"];

  return (
    <div className="main-container mx-auto w-95">
        <div className="row my-5">
            <div className="col-lg-6 col-sm-12 col-md-12">
                <div className='text-center imgSection'>
                    <img src={'/src/assets/21.webp'} className='w-100' />
                </div>
                <div className="row w-60 mx-auto justify-content-center" style={{gap:'15px',margin:'15px 0px'}}>
                    <div  className={`col-lg-4 col-sm-4 col-md-4 imgpreview ${ activeIndex == 1 && highlightBtnCls}`} >
                        <img src={'/src/assets/21.webp'} className='w-100 opacity0_5' />
                    </div>
                    <div className={`col-lg-4 col-sm-4 col-md-4 imgpreview ${ activeIndex == 2 && highlightBtnCls}`}>
                        <img src={'/src/assets/21.webp'} className='w-100 opacity0_5' />
                        </div>
                    <div className={`col-lg-4 col-sm-4 col-md-4 imgpreview ${ activeIndex == 3 && highlightBtnCls}`}>
                        <img src={'/src/assets/21.webp'} className='w-100 opacity0_5' />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
                <h1>Yellow Casual Sweater</h1>
                <p style={{display:'flex',alignItems:'center',gap:'5px'}}>Rated: <Rating value={4.5} precision={0.5} size="small" readOnly />(4.5)</p>
                <h6>Option</h6>
                <div className="d-flex proddetail" style={{gap:'15px'}}>
                    {[1,2,3,4].map((x,I)=><Chip key={I} onClick={()=>setselectedOptionIndex(I)} className={`${selectedOptionIndex===I && 'highlightBtnCls'}`} label={`Option ${x}`} style={{borderRadius:'5px',height:'30px'}} variant="outlined" clickable />)}
                </div>
                <h6>Type</h6>
                <div className="d-flex proddetail" style={{gap:'15px'}}>
                    {[1,2,3,4].map((x,I)=><Chip key={I} onClick={()=>setSelectedType(I)} className={`${selectedType===I && 'highlightBtnCls'}`} label={`Type ${x}`} style={{borderRadius:'5px',height:'30px'}} variant="outlined" clickable />)}
                </div>
                <h6>$244.00</h6>
                <p>Stock Available</p>
                <button type="button" class="btn btn-danger" style={{color:'#D23F57!important'}}>Add To Cart</button>
                <p>Sold By: <b>Word Wide Wishes</b></p>
            </div>
        </div>
        <div>
            <TabComponent/>
        </div>

        <div className='my-3 mb-5'>
            <h5>Frequently Bought Together:</h5>
            <div className='d-flex flex-wrap w-95 mx-auto' style={{gap:'10px'}} >
                {[1,2,3,4,5,6].map((x,i,a)=> <> <ProductSuggestion/> <div className='addicon'>{i==(a.length-1) ? '=' : '+'}</div>{i==(a.length-1) &&  <TotalPrice/>}</>)}
            </div>

        </div>

        <div className="relatedproducts">
            <h5>Related Products</h5>
            <div className='w-95 mx-auto d-flex align-items-center flex-wrap justify-content-start' style={{gap:'30px'}}>
                <ProductCardDetail/>
                <ProductCardDetail/>
                <ProductCardDetail/>
                <ProductCardDetail/>
                <ProductCardDetail/>
                <ProductCardDetail/>
                <ProductCardDetail/>
            </div>
        </div>

    </div>
  );
};

export  {ProductDetail};

export const TotalPrice = () =>{
    return(
        <Box
                sx={{
                    width: "max-content",
                    padding: '87px 31px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '25px',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    height:'max-content',
                    alignSelf:'center'
                }}
                >
                {/* Price Section */}
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                    color: '#e63946',
                    fontWeight: 'bold',
                    marginBottom: 1,
                    }}
                >
                    $2,500.00
                </Typography>
                <Typography
                    variant="body2"
                    component="div"
                    sx={{
                    color: '#6c757d',
                    marginBottom: 3,
                    }}
                >
                    Save $500.00
                </Typography>

                {/* Buttons Section */}
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    }}
                >
                    <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#e63946',
                        color: '#fff',
                        fontWeight: 'bold',
                        '&:hover': {
                        backgroundColor: '#d62839',
                        },
                    }}
                    >
                    Add To Cart
                    </Button>
                    <Button
                    variant="outlined"
                    sx={{
                        borderColor: '#e63946',
                        color: '#e63946',
                        fontWeight: 'bold',
                        '&:hover': {
                        borderColor: '#d62839',
                        backgroundColor: '#fdecea',
                        },
                    }}
                    >
                    Add To List
                    </Button>
                </Box>
        </Box>
    )             
    
}