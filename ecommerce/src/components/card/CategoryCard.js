import React, { useEffect, useState } from 'react';
import './categorycard.css';
import axios from 'axios';
import { base_url } from '../../Constants';

function CategoryCard() {
    const [category, setCategory] = useState([]);
    const [product ,setProduct]=useState([]);
    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories =async()=>{
        try {
            const res = await axios.get(base_url + 'Category')
            if(res.data){
                setCategory(res.data);
            }
        } catch (err) {
            console.error('Somthing bad Happen');
        }
    }
    const getProducts= async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            console.log(res);
            if (res.data)
            {
                console.log(res.data);
                setProduct(res.data);
            }
        } catch (error) {
            console.log("get product error"+error);
        }
    }

    return (
        <div>
            <div className="categorycard-container p-4 d-flex justify-content-around ">
                {product.map((i, idx) => (
                    <div className="categorycard-one" key={idx}>
                        <img
                            src={'https://i.postimg.cc/MHv7KJYp/access.webp'}
                            alt="Avatar"
                            className="categorycard-image"
                            height="200"
                        />
                        <div className="categorycard-overlay">
                            <div
                                className="categorycard-text ps-3 fw-bold"
                                key={idx}
                            >
                                {i.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CategoryCard;
