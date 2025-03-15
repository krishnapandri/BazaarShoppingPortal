import React from "react";
import {
  Box,
  Typography,
  IconButton, 
  Chip,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import './ProductCardDetail.css'

const ProductCard = () => {
  return (
    <div class="card prodCard mb-3" style={{width:'18%'}}>
        <Chip
          label="10% off"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "rgb(210, 63, 87)",
            color: "white",
            fontWeight: "bold",
            fontSize: "12px",
            height:'26px',
            borderRadius:"5px"
          }}
        />
      <Box className="controlOpacity"
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          display: 'flex',
          flexDirection:'column',
          opacity:'0',
          transition:'all 0.3s ease-in-out',
          '.card:hover &': {
            opacity: 0.6,
          },
        }}
        >
          <IconButton size="small">
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
      </Box>
      <img
        class="card-img-top"
        src="/src/assets/21.webp"
        alt="Card image cap"
      />
      <div class="card-body pt-1">
        {/* <Typography variant="h6" sx={{ color: '#4B566B', fontWeight: 'bold' }}>Colgate Advance Protection Toothpaste</Typography> */}
        <h6 className="m-0" style ={{ color: '#4B566B', fontWeight: 'bold' }}>Colgate Advance Protection Toothpaste</h6>
        <Rating value={4.5} precision={0.5} size="small" readOnly sx={{ mb: 1 }} />
        <div className="d-flex align-items-center gap-1 justify-content-center">
          <Typography variant="body2" sx={{ color: 'rgb(210, 63, 87)', fontWeight: 'bold' }}>$225.00</Typography>
          <Typography
            variant="body2"
            sx={{
              textDecoration: 'line-through',
              color: 'gray',
              fontSize: '12px',
            }}
          >
            $250.00
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
