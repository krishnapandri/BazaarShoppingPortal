import { useState } from 'react'
import './dashboard.css'
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SidebarMenu from './sidebarmenu';
import { Loader } from './loader';
import { CreateProduct } from './Products/createProduct';
import ProductTable from './Products/productList';
import { Outlet } from 'react-router-dom';

const FullImg = <img  src={`/src/assets/fullimg.svg`} alt="" /> ;
const ShortImg = <img  src={`/src/assets/shortimg.svg`} alt="" />;
const rightArrow =  <FontAwesomeIcon color='white' icon={faChevronRight} />;
const leftArrow =  <FontAwesomeIcon color='white' icon={faChevronLeft} />;
export const AdminDashboard = ()=>{
    const [IsSideBarOpen,SetIsSideBarOpen] = useState(true);
    const [IsSideBarHover,SetIsSideBarHover] = useState(true);
    
/* <Loader></Loader> */
    return (
        <div className="w-100 mx-auto d-flex position-relative" >
                    <div className={`${IsSideBarOpen ? 'w-21' : 'w-6'} h-100vh sidebar position-fixed pt-3`} 
                         onMouseEnter={e=> IsSideBarOpen || SetIsSideBarHover(isSideBar => !isSideBar)} 
                         onMouseLeave={e=> IsSideBarOpen || SetIsSideBarHover(isSideBar => !isSideBar)} style={{backgroundColor:'#2B3445',maxWidth:'283px',zIndex:1000}}>
                        <div className={`d-flex justify-content-${IsSideBarHover ? 'between' : 'center'} align-items-center mx-auto w-90 ${ IsSideBarHover ? '' : 'text-center'}`}>
                            <div className={`${IsSideBarHover  ? 'w-50' : 'w-80' } `} >
                                { IsSideBarHover ? FullImg : ShortImg } 
                            </div>
                            { IsSideBarHover && <div className='w-50' style={{textAlign:'right',opacity:`${IsSideBarHover ? 1 : 0}`}}>
                                                    <IconButton style={{background:'#2B3445'}} onClick={e=>SetIsSideBarOpen(!IsSideBarOpen)}>
                                                        <FontAwesomeIcon style={{fontSize:'15px'}} className={`${IsSideBarOpen ? 'rotate180' : 'rotate0'} `} color='white' icon={faChevronRight} />
                                                    </IconButton>
                                                </div>  
                            }
                        </div>
                        <div className='w-95 mx-auto SideBarMenu'>
                            <SidebarMenu heading={'Admin'} IsSideBarHover={IsSideBarHover} />
                        </div>                        
                    </div>
                    <div className={`${IsSideBarOpen ? 'OpenSideBar w-79' : 'dashboardWidth'}  h-100vh transition03s`} style={{backgroundColor:'#FBFBFB'}} >
                        <Outlet /> 
                    </div>
        </div>
    )
}