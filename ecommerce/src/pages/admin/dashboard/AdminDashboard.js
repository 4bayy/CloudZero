import React from 'react';
import { useState } from 'react';
import './admindashboard.css';
import AddProduct from '../../../component/AddProductModal';
import { Navigate } from 'react-router-dom';
import UserPage from '../userpage/AdminUserPage';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/adminsidebar/Sidebar';
import axios from 'axios';
import { base_url } from '../../../Constants';

function AdminDashboard() {

    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    
    return (
        <div>
            <AddProduct show={showProduct} setShow={setShowProduct} />
            <Sidebar></Sidebar>
            <div class="content">
                <h2 >Admin Dashboard</h2>
                <div className='row '>
               <div  className='admin-product-management col '>
                 <h5 style={{textAlign:"center",paddingTop:"10px"}}>User Product Managemnet</h5> 
                 <div className='row'>
                    <div className='col admin-adproduct '>  
                      <button className='btn btn-warning rounded ' onClick={()=>setShowProduct(!showProduct)}>Add Product</button> 
                      <button className='btn btn-success rounded ms-2'>Add Category</button> 
                    </div>
                 </div>
               </div>

               </div>
            </div>
        </div>
    );
}
export default AdminDashboard;
