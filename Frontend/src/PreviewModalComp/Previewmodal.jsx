/* import React from "react";
import "./Previewmodal.css";

const ProductModal = ({ product={category:'fashion',name:'Yellow Casual Sweater',description:'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',rating:'4',reviews:40,price:244.00}, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img src={'./src/assets/21.webp'} alt={product.name} className="product-image" />
          <div className="product-details">
            <p className="product-category">{product.category.toUpperCase()}</p>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price?.toFixed(2)}</p>
            <div className="product-rating">
              <span>{"⭐".repeat(product.rating)}</span>
              <span> ({product.reviews})</span>
            </div>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
 */


import React, { useState } from "react";
import "./Previewmodal.css";

const ProductModal = ({ product={images: [
    "./src/assets/21.webp", // Replace with actual images
    "./src/assets/21.webp",
    "./src/assets/21.webp",
  ],category:'fashion',name:'Yellow Casual Sweater',description:'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',rating:'4',reviews:40,price:244.00}, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change to next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Change to previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={()=>onClose(false)}>
          &times;
        </button>
        <div className="modal-body">
          <div className="image-container">
            <button className="prev-button" onClick={handlePrevImage}>
              &#x276E;
            </button>
            <img
              src={product.images[currentImageIndex]}
              alt={`Product ${currentImageIndex + 1}`}
              className="product-image"
            />
            <button className="next-button" onClick={handleNextImage}>
              &#x276F;
            </button>
          </div>
          <div className="product-details">
            <p className="product-category">{product.category.toUpperCase()}</p>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-rating">
              <span>{"⭐".repeat(product.rating)}</span>
              <span> ({product.reviews})</span>
            </div>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
