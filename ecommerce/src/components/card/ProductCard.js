/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Login from '../../component/LoginModal';
import './productcard.css';
import { Button } from 'react-bootstrap';
import { addCart, addWishlist } from '../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { removeWishlist } from '../../redux/CartSlice';
import { useLocation } from 'react-router-dom';
import notfound from '../../images/notfound.jpg';

function ProductCard(props) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [addWish, setAddWish] = useState(true);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.carts);
    const location = useLocation();

    const checkLogin = (item) => {
        console.log('add to Cart clicked');
        if (localStorage.token) {
            console.log(item);
        } else {
            console.log('Need to Login');
            setShow(true);
        }
    };
    const onclickText = () => {
        if (localStorage.token) {
            navigate(`/productsdetail/${props.id}`);
        } else {
            setShow(true);
        }
    };

    return (
        <div class="product-card">
           <div className='card' style={{border:"1px solid black",padding:"2px"}}>
            <div>
                <img src={notfound} alt='cardimage' 
                style={{height:"200px"}}
                ></img>
            </div>
            <div>
                <h5 >{props.title} </h5>
                <p> {props.price}</p>
            </div>
            <button className=' btn-sm btn-primary m-4' >+Cart</button>
           </div>
        </div>
    );
}
export default ProductCard;
