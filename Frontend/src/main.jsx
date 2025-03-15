import { createRoot } from 'react-dom/client'
import Loginform from './Loginform.jsx'
import {BrowserRouter,Route,Router,Routes,Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Body } from './body'; 
import FooterComponent from './FooterComponent/FooterComponent.jsx';
import { NavBarNew } from './CustomNavBar/NavBarNew.jsx';
import { ProductDetail } from './ProductDetailComponent/ProductDetail.jsx';
import {AdminDashboard} from './Admin/dashboard.jsx'
import SidebarMenu from './Admin/sidebarmenu.jsx';
import ProductTable from './Admin/Products/productList.jsx';
import NotificationContainer from './Notification/Notification.jsx';
import { CreateProduct } from './Admin/Products/createProduct.jsx';
import { MainDashboard } from './Admin/MainDashboard/MainDashboard.jsx';
import { CreateCategory } from './Admin/Category/createCategory.jsx';
import {CategoryList} from './Admin/Category/CategoryList.jsx';


const MainLayout = () => {
    return <>
        <NotificationContainer/>
        <NavBarNew />
            <Outlet />  {/* This will render the matched child route */}
        <FooterComponent />
        </>
};

const AdminLayout = () => <><NotificationContainer/><Outlet/></>;



const finalRoutes =   
<BrowserRouter>
            <Routes>
                
                {/* 🌟 Public Routes with MainLayout (Navbar + Footer) */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Body />} />
                    <Route path="/login" element={<Loginform />} />
                    <Route path="/productdetail/:id" element={<ProductDetail />} />
                </Route>

                {/* 🌟 Admin Routes with AdminLayout (No Navbar, No Footer) */}
                <Route element={<AdminLayout />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />}>
                        <Route index element={<MainDashboard />} />
                        <Route path="products/create" element={<CreateProduct />} />
                        <Route path="products/list" element={<ProductTable />} />
                        <Route path="categories/create" element={<CreateCategory />} />
                        <Route path="categories/list" element={<CategoryList />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

createRoot(document.getElementById('root')).render(finalRoutes);


