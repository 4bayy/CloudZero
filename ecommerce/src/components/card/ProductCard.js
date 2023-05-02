/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, Toast, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import "./productcard.css";

function Card(props) {

 
    const needLogin=()=>{
        toast.info('Need Login', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            theme: 'light'
        })
    }

    return (
        <div>
                <div className="card" key={props.index}>
                <img
                    className="card-imgtop p-4"
                    width={"100%"}
                    src="https://mdbootstrap.com/img/Photos/Others/images/43.webp"
                    alt="Cardimage cap"
                />
                <div className="card-body">
                    <h4 id="cardtitle"  >
                       <Link>{props.title}</Link>
                    </h4>

                    <p className="card-text">
                        {props.price}
                    </p>
                    {localStorage.token ? (
                    //  <a href="#" className="btn-sm ps-3 pe-3 btn-primary  viewmore-btn">
                      <Link to={`/productsdetail/${props.id}`} className='viewmore-btn'>View  More</Link>
                    //  </a>
                    ):(
                        <button  onClick={needLogin}>Login</button>
                    )}
                   
                </div>
                </div>
        </div>
    );
}
export default Card;
