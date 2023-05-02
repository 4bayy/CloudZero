import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar()
{
    return (
             <div class="sidebar">
                <Link to={'/admin'}>Home</Link>
                <Link to={'/admin/users'}>Users</Link>
                <Link to={'/admin/products'}>Products</Link>
                <a href="#about">About</a>
            </div>
    )
}
export default Sidebar;
