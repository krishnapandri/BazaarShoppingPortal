import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faHeart,faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import './ProductCardComponent.css'
export default function ProductCard({individualWidth,productImg="https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75",OpenPreviewPopup}) {
  const navigate = useNavigate();
  const handleViewDetails = (e) => {
    // 
    navigate(`/productdetail/${0}`);
  };
  return (
    <div onClick={handleViewDetails} className="card" style={{width:`${individualWidth}%`}}>
    <div className="icons">
      <div className="icon" onClick={(e)=>{e.stopPropogation();OpenPreviewPopup(true)}}><FontAwesomeIcon icon={faEye} /></div>
      <div className="icon"><FontAwesomeIcon icon={faHeart} /></div>
    </div> 
    <img
      src={productImg}
      alt="Yellow Casual Sweater"
    /> 
    <div className="product-details">
      <div className="product-title">Yellow Casual Sweater</div>
      <div className="product-price">$110.00</div>
      <div className="rating">
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={farStar} /> 
        <span style={{color:'grey',marginLeft:'5px'}}>(0)</span></div>
    </div> 
    <button className="add-to-cart">Add to Cart</button>
  </div>
  );
}