import './NavBarNew.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass,faUser,faBagShopping } from '@fortawesome/free-solid-svg-icons';
import ButtonBase from '@mui/material/ButtonBase';
import Badge from '@mui/material/Badge';
import { Category } from '../newCategoryComp';
import DropdownMenu from './MenuLinks';
export const NavBarNew = ()=> <>

<div className='d-flex w-100 py-1' style={{background:'#2B3445'}} >
    <div className="w-50 d-flex align-items-baseline">
        <span class="badge rounded-pill text-bg-dark">Dark</span>
        <h6 className='m-0 text-white'style={{fontFamily:'system-ui',fontSize:'0.8rem'}} >Free Express Shipping</h6>
    </div>
    <div className="w-50 d-flex align-items-center justify-content-end text-white" style={{gap:'20px',paddingRight:'30px'}}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
    </div>
</div>  

<div className="row w-95 mx-auto mt-3">
    <div className="col-lg-3">
        <img className="css-10f926n"  alt="logo" loading="lazy" width="105" height="50" 
        decoding="async" data-nimg="1" src={'https://template.getbazaar.io/assets/images/logo2.svg'} 
        style={{'color':'transparent'}}/>
    </div>
    <div className='col-lg-7 col-md-7 d-flex position-relative'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='position-absolute z-1 searchIcon' />
        <input className='searchbar w-100' placeholder={'Searching For...'}/>
        <div className="position-absolute navdiv" style={{backgroundColor:'#F3F5F9'}}>
            <select className="form-select" style={{backgroundColor:'transparent',border:'none',boxShadow:'none',borderLeft:'1px solid #d5dae2'}} aria-label="Default select example">
                <option selected>All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
    <div className="d-flex align-items-center justify-content-end col-lg-2 col-md-2 col-sm-2" style={{alignContent:'center',textAlign:'right',marginLeft:'auto'}}>
        <ButtonBase className="ripple mx-2">
            <FontAwesomeIcon className="ripple icons p-2" icon={faUser} style={{ color: '#7D879C' }} />
        </ButtonBase>
        <div className='position-relative'>
        <Badge badgeContent={1} color="primary" overlap="circular" >
            <ButtonBase className="ripple">
                <FontAwesomeIcon className="ripple icons p-2" icon={faBagShopping} style={{ color: '#7D879C' }} />
            </ButtonBase>
        </Badge>
        </div>
    </div>
</div>

<div className="row w-95 mx-auto py-2 pt-4">
    <div className='col-lg-3 col-md-3 col-sm-3'>
        {/* <ButtonBase></ButtonBase> */}
        <Category/>
    </div>
    <div className="col-lg-9 col-md-9 col-sm-9 align-content-center">
        <DropdownMenu/>
    </div>
</div>



</>