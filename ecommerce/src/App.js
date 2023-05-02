import React from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Login from "./component/LoginModal";
import CartPage from "./pages/cart/CartPage";
import WishList from "./pages/WishList";
import Register from "./pages/register/Register";
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import UserPage from "./pages/admin/userpage/AdminUserPage";
import ProductPage from "./pages/admin/productpage/AdminProductPage";

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>  
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cartpage" element={<CartPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/wishlist" element={<WishList/>}></Route>
      <Route path="/productsdetail/:id" element={<ProductDetail/>}></Route>
      {/* admin Page  */}
      <Route path="/admin" element={<AdminDashboard/>}></Route>
      <Route path="/admin/users" element={<UserPage/>}></Route>
      <Route path="/admin/products" element={<ProductPage/>}></Route>
     </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
