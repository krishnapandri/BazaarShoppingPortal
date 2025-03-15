import React from 'react';
import './ProductSuggestion.css'

export const ProductSuggestion = (
    {img='https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F2.PremiumGroceryCollection.png&w=640&q=75',
    productTitle='Premium Grocery Collection',
    currprice='250.00',
    orgprice='162.50'}
    ) => {
  return (
        <div className="product-card">
          <div className="m-0 w-100 h-auto product-img">
              <img
              src={img}
              className='m-0'
              alt="Premium Grocery Collection"
              /> 
          </div>
          <div className="text-left">
            <h3 className="product-title m-0">{productTitle}</h3>
            <div className="product-prices">
                <span className="current-price">${currprice}</span>
                <span className="original-price">${orgprice}</span>
            </div>
          </div>
        </div>
  );
};
 
