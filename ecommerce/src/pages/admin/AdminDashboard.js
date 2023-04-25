import React from 'react';
import './admindashboard.css';

function AdminDashboard() {
    return (
        <div>
            <div class="sidebar">
                <a class="active" href="#home">
                    Home
                </a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>

            <div class="content">
                <h2>Responsive Sidebar Example</h2>
                <div className='row '>
               <div  className='admin-product-management col '>
                 <h5>User Product Managemnet</h5> 
                 <div className='row'>
                    <div className='col'>Add Product</div>
                    <div className='col'>View Orders</div>
                 </div>
               </div>
               <div  className='admin-category-management col'><h5>User Category Managemnet</h5></div>
               </div>
            </div>
        </div>
    );
}
export default AdminDashboard;
