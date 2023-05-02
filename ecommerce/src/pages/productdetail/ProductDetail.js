import './productdetail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from '../../Constants';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/CartSlice';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Header from '../../component/Header';

function ProductDetail() {
    const [show, setShow] = useState(false);
    const [productdetail, setProductDetail] = useState({});
    const { id } = useParams();
    const dispatch =useDispatch();

    useEffect(() => {
        getDetails();
    });

    const getDetails = () => {
        try {
            axios.get(base_url + `Product/${id}`)
            .then((res) => {
              if (res.data)
              {
                setProductDetail(res.data.result);
              }
            })
        } catch (error) {
            console.log(error);
        }
    };
    
  const movetoCart=(item)=>{
    console.log("Add to cart clicked ");
    console.log(item);
    dispatch(addCart(item));
  }

    return (
        <div>
            <ToastContainer />
            <Header />
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img
                            class="img-fluid details-img"
                            width={'70%'}
                            alt="imagehere"
                        />
                    </div>
                    <div class="col-md-6 col-sm-12 description-container">
                        <div class="main-description">
                            <p class="product-category mb-0">Graphite</p>
                            <h3>{productdetail.name}</h3>
                            <p class="product-price">${productdetail.price}</p>
                            <p class="product-title mt-4 mb-1">
                                About this product
                            </p>
                            <p class="product-description mb-4">
                                {productdetail.description}
                            </p>
                            <div>
                                <button className="btn-md btn-primary me-3" onClick={()=>movetoCart(productdetail)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;
