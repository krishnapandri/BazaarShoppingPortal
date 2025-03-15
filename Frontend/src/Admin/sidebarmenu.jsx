import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import StoreIcon from "@mui/icons-material/Store";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './sidebarmenu.css'
import { Link } from "react-router-dom";
let currentActiveIndex = 0;
const SidebarMenu = ({heading = 'Admin',IsSideBarHover=false}) => {
  const [openMenu, setOpenMenu] = useState({'0':true});
  useEffect(()=>{
    if(!IsSideBarHover)
      setOpenMenu({});
    else
      setOpenMenu({...openMenu,[String(currentActiveIndex)]:true});
    // setOpenMenu({});
  },[IsSideBarHover]);
  const menuData = [
    {
      label: "Dashboard",
      icon: <DashboardRoundedIcon />,
      path: "/admin/dashboard/",
      isactive:false
    },
    {
      label: "Products",
      icon: <StoreIcon />,
      children: [
        { label: "Product List", path: "products/list",isactive:false },
        { label: "Create Product", path: "products/create",isactive:false },
        { label: "Product Reviews", path: "products/reviews",isactive:false },
      ],
      isactive:false
    },
    {
      label: "Categories",
      icon: <ManageAccountsIcon />,
      children: [
        { label: "Category List", path: "categories/list" },
        { label: "Create Category", path: "categories/create" },
      ],
      isactive:false
    },
    {
      label: "Brands",
      icon: <AppsRoundedIcon/>,
      children: [
        { label: "Category List", path: "/categories/list" },
        { label: "Create Category", path: "/categories/create" },
      ],
      isactive:false
    },
    
  ];
  // menuData[0].isactive=true;
  const [menuDataState,SetmenuDataState] = useState(menuData);
  const handleToggle = (index) => {
    setOpenMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    // currentActiveIndex = index;
  };

  const setActiveFlagTrue = (parentObj,ChildIndex,path)=>{
    const menuIndex = menuData.findIndex(x=> x.label == parentObj.label);
    Object.keys(openMenu).forEach(index=> openMenu[index]  =  index === String(menuIndex) );
    if(!parentObj.children)
      currentActiveIndex = null;
    else 
    currentActiveIndex = menuIndex;     
    // setActiveFlagFalse();
    if(ChildIndex === null || ChildIndex===undefined ){
      parentObj.isactive = true;
      menuData[menuIndex] = parentObj;
    }
    else {
      parentObj.children.forEach((x,index)=> x.isactive = index === ChildIndex ); //[ChildIndex].isactive = true;
      parentObj.isactive = true;
      menuData[menuIndex] = parentObj;
    }
    menuData.forEach((x,index)=> x.isactive = index === menuIndex ); //[ChildIndex].isactive = true;
    SetmenuDataState(menuData);
    console.log(path);
    console.log(menuData);

  }

  function setActiveFlagFalse(){
    SetmenuDataState(menuData=>
      menuData.map(x=>{
        x.isactive = false;
        if(x.children && x.children.length > 0)
          x.children = x.children.map(x=>x.isactive = false);
        return x;
      })
    );
  }

  const renderMenuItem = (item, index) => (
    <React.Fragment  key={index}>
      <Link to={item.path || null }>
        <ListItem className="align-items-center" style={{justifyContent: 'center',padding:'7px 5px 7px 0px',borderRadius:'15px' }}
          onClick={() =>item.children ? handleToggle(index) : setActiveFlagTrue(item,item.children,item.path)}
          sx={{"&:hover": {backgroundColor: "rgba(255, 255, 255, 0.1)", },cursor:'pointer'}}>
          <ListItemIcon sx={{ color:item.isactive ? 'rgb(78, 151, 253)'  : 'white',padding:'6px 0px' }} className="justify-content-center" >{item.icon}</ListItemIcon>
          {IsSideBarHover &&  <>
                                <ListItemText primary={item.label} sx={{color:item.isactive ? 'rgb(78, 151, 253)'  : 'white',margin:0,padding:'6px 0px'}} /> 
                                {item.children && (openMenu[index] ? <ExpandLess sx={{color:'white'}} /> : <ExpandMore sx={{color:'white'}} />)}
                              </>
          }
        </ListItem>
      </Link>
      {item.children && (
        <Collapse in={openMenu[index]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child, childIndex) => (
              <Link to={child.path}>
                <ListItem key={childIndex} style={{fontSize:14}} className="align-items-center"
                sx={{
                    paddingLeft:0,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional hover effect
                    },
                    cursor:'pointer',
                    justifyContent:'center',
                    paddingRight:'10px',
                    borderRadius:'15px',
                    color:item.isactive ? '#4E8BCF'  : 'white',
                }}
                  onClick={() => setActiveFlagTrue(item,childIndex,child.path) }>
                  <ListItemIcon sx={{justifyContent:'center',textAlign:'center',color:child.isactive ? 'rgb(78, 151, 253)'  : 'white'}}><div className="dot"></div></ListItemIcon>
                  <ListItemText primary={child.label} sx={{ color:child.isactive ? 'rgb(78, 151, 253)'  : 'white',whiteSpace:'nowrap' }} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );

  return (
    <div className="FinalMenu">
        <p className="sidebarHeading" style={{opacity:IsSideBarHover ? 1 : 0,fontSize:'12px',fontWeight:700}} >{heading.toUpperCase()}</p>
        <div className="overflow-auto MenuDiv" style={{height:'calc(100vh - 18vh)',fontSize:14}}>
          <List>
            {menuDataState.map(renderMenuItem)}
          </List>  
        </div>
    </div>
  );
};

export default SidebarMenu;
