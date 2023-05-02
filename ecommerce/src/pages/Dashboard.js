import Header from '../component/Header';
import Card from '../components/card/ProductCard';

import './dashboard.css';
import { base_url } from '../Constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from './productdetail/ProductDetail';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import sliderimageone from './../images/sliderimageone.png';
import sliderimagetwo from './../images/sliderimagetwo.png';
import sliderimagethree from './../images/magnificent-woman-long-bright-skirt.jpg';
import offerimageone from './../images/offerimageone.jpg';
import offerimagetwo from './../images/offerimagetwo.jpg';
import offerimagethree from './../images/offerimagethree.jpg';
import offerimagefour from './../images/offerimagefourjpg.jpg';
import hmlogo from "./../images/hmlogo.png";
import zara from "./../images/zara.png";
import nike from "./../images/nike.png";
import fitch from "./../images/fitch.png";
import { addWishlist } from '../redux/CartSlice';
import { useSelector } from 'react-redux';
import { removeWishlist } from '../redux/CartSlice';
import { useLocation } from 'react-router-dom';
import { error } from 'jquery';
import Footer from '../components/footer/Footer';

function Shop() {
    const [productdata, setProductData] = useState([]);
    const [category, setCategory] = useState([]);
    const [products,setProducts]=useState([]);

    const [filteredList, setFilteredList] = new useState(productdata);
    const state = useSelector((state) => state.carts);

    // const filterSearch = (event) => {
    //     const query = event.target.value;
    //     const filteredData = productdata.filter((item) => {
    //         return item.title.toLowerCase().includes(query.toLowerCase());
    //     });
    //     setFilteredList(filteredData);
    //     if (filteredList.length() === 0) {
    //         return <h1>not found</h1>;
    //     }
    // };

    // const getCategoryWise = (category) => {
    //     axios
    //         .get(base_url + 'products/category/' + category)
    //         .then((res) => {
    //             console.log(res.data);
    //             setFilteredList(res.data);
    //         })
    //         .catch((err) => {
    //             toast.error('something went wrong', {
    //                 position: 'top-right',
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 theme: 'light'
    //             });
    //         });
    // };
    useEffect(() => {
        getCategories();
        getProduct();
        getProducts();
    }, []);

    const getCategories = async () => {
        try {
            const res = await axios.get(base_url + `Category`).then((res) => {
                if (res.data != null) {
                    console.log(res.data);
                    setCategory(res.data);
                    console.log(category);
                }
            });
        } catch (err) {
            console.log('Something Bad Happen');
        }
    };
    const getProduct = async () => {
        try {
            const res = await axios
                .get(base_url + `Product/Product/Get`)
                .then((res) => {
                    if (res.data != null) {
                        console.log(res.data);
                        setProductData(res.data);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };
    const getProducts=()=>{
        try {
            axios.get(base_url+`Product/Product/Get`)
            .then((res)=>{
                console.log(res);
            if (res.data)
            {
                setProducts(res.data);
            }
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="shop-container">
            <Header />
            {/* <div className="dashboard-category-div">
                {category.length > 0 ? (
                    category.map((i, idx) => (
                        <div className="dashboard-category-section" key={idx}>
                            <div className="dashboard-category-section-text">
                                {i.name}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <div className="loading"></div>
                    </div>
                )}
            </div> */}
            <div className='dashboard-static-section'>
                <div id="dashboard-content-one">
                <p id='dashboard-heading-paraone'>In this season, find the best 🔥</p>
                <h1 id='dashboard-heading-title'>Exclusive collection<br/> for everyone</h1>
                <button className='exploremore-btn'>Explore More </button>
                </div>
            </div>
            <div
                className="corousal-container"
                style={{
                    borderRadius: '30px',
                    margin:"30px"
                }}
            >              
                <h2 className='new-arrival-text'>New Arrivals. REY backpacks & bags</h2>
                <Carousel variant="dark" >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height={300}
                            src={sliderimageone}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="dashboard-corousal">
                            <div className="col-5"></div>
                            <div className="col-4">
                                <h5 className="corousal-heading">
                                    {' '}
                                    NEW ARRIVAL{' '}
                                </h5>
                                <p className="corousal-para">
                                    {' '}
                                    SHOP THE COLLECTION{' '}
                                </p>
                                <button className="corousal-button">
                                    Shop Now
                                </button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height={300}
                            src={sliderimagetwo}
                            alt="First slide"
                        />
                        <Carousel.Caption className="dashboard-corousal">
                            <div className="col-5"></div>
                            <div className="col-4">
                                <h5 className="slidertwo-heading">SEPTEMBER </h5>
                                <p className="slidertwo-para">
                                    {' '}
                                    SEASON SALE 75 % DISCOUNT{' '}
                                </p>
                                <button className="corousal-button">
                                    Shop Now
                                </button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='home-product-section'>
               <h2 className='category-whatsspecial'>Shop Now</h2>
               <div className='product-cards'>
               {products.map((i,idx)=>(
                               <Card id ={i.id} index={idx} title={i.name} description={i.description} />
                               ))}
                               </div>

            </div>
            {/* Featues Section. */}
            <div className="dashboard-features-section">
                <div className="parallax">
                    <h3 className="parallax-text"> FREE SHIPPPING & RETURN</h3>
                </div>
            </div>
            <div className="dashboard-offer-section">
                {/* <div className="row">
                    <div className="col dashboard-offer-section-divone ">
                        <div style={{ marginLeft: '20px' }}>
                            <img
                                src={offerimageone}
                                alt={'offerimageone'}
                                className="offerimage"
                            ></img>
                            <img
                                src={offerimagetwo}
                                alt={'offerimagetwo'}
                                className="offerimage"
                            ></img>
                            
                        </div>
                    </div>
                    <div className="col">
                        <img
                            src={offerimagethree}
                            alt={'offerimagethree'}
                            className="offerimage-three"
                        ></img>
                          <img
                            src={offerimagethree}
                            alt={'offerimagethree'}
                            className="offerimage-three"
                        ></img>
                    </div>
                </div> */}
            </div>
            <div className='m-4'>
                <h3 style={{fontSize: "1.875rem",lineHeight: "2.25rem",fontWeight:"600"}}>Discover more. <span>Good things are waiting for you</span></h3>
                <div className='row p-3 m-4'>
                    <div className='col new-arrivals'>
                        <p>Explore new arrivals</p>
                        <h5>Shop the Latest from top brands</h5>
                        <button className='rounded p-2 showme-all' >Show me all</button>
                    </div>
                    <div className='col gift-cards'>
                    <p>Explore new arrivals</p>
                        <h5>Shop the Latest from top brands</h5>
                        <button className='rounded p-2 showme-all' >Show me all</button>
                    </div>
                </div>
            </div>
            <div className="products-category-section">
                <div className="product-category-text">
                    <h2 className="category-whatsspecial">
                        Popular Brands 
                    </h2>
                    <div className='row brands-container'>
                        <div className='col'>
                            <img src={hmlogo} alt="brandsimage" width={"80px"}></img>
                        </div>
                        <div className='col'>
                        <img src={zara} alt="brandsimage" width={"80px"} className='pt-4'></img>
                        </div>
                        <div className='col'>
                        <img src={nike} alt="brandsimage" width={"80px"} className='pt-3'></img>
                        </div>
                        <div className='col'>
                        <img src={fitch} alt="brandsimage" width={"80px"}></img>
                        </div>
                     </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Shop;
