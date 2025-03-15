import React, { useState } from "react";
import {  Typography } from "@mui/material";
import { faAngleRight,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonBase } from "@mui/material";
import "./MenuLinks.css";

const DropdownMenu = () => {
  const [hoveredItem, setHoveredItem] = useState("");
  const menuItems = ['Home' ,'Mega Menu','Full Screen Menu','Pages','User Account','Vendor Account'];
  return (
    <div className="menuLink"  style={{ display: "flex", gap: "30px" , justifyContent:'end' ,alignItems:'center',fontFamily:'Public Sans,Public Sans Fallback' }}>
      {
        menuItems.map((menuName) => (
        <div className="position-relative" key={menuName} onMouseEnter={(e) => setHoveredItem(menuName)} onMouseLeave={()=>setHoveredItem("")} >
            <Typography variant="body2" style={{ cursor: "pointer", fontWeight:'500'}} className="align-content-center">
                    {menuName} <FontAwesomeIcon style={{marginLeft:'5px',fontSize:'0.7rem'}} color="rgb(174, 180, 190)" icon={faAngleDown} />
            </Typography>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;

    







