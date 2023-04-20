import Header from '../component/Header';
import ProductCard from '../components/card/ProductCard';
import './dashboard.css';
import { base_url } from '../Constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from './productdetail/ProductDetail';
import { ToastContainer, Toast, toast } from 'react-toastify';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { BsFillHeartFill } from 'react-icons/bs';
import sliderimageone from './../images/sliderimage.jpg';
import sliderimagetwo from './../images/joyful-girl-with-curly-brown-hair.jpg';
import sliderimagethree from './../images/magnificent-woman-long-bright-skirt.jpg';
import { addWishlist } from '../redux/CartSlice';
import { useSelector } from 'react-redux';
import { removeWishlist } from '../redux/CartSlice';
import { useLocation } from 'react-router-dom';
import { error } from 'jquery';
import Footer from '../components/footer/Footer';
import CategoryCard from '../components/card/CategoryCard';

function Shop() {
    const [productdata, setProductData] = useState([]);
    const [category, setCategory] = useState([]);
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
    const getProduct =async()=>{
        try {
            const res = await axios.get(base_url+`Product/Product/Get`).then((res)=>{
                if (res.data !=null){
                    console.log(res.data);
                    setProductData(res.data);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="shop-container">
            <Header />
            <div
                className="corousal-container"
                style={{
                    padding: ' 0px',
                    borderRadius: '8px',
                    margin: '0 10px'
                }}
            >
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height={500}
                            src={sliderimageone}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="row dashboard-corousal">
                            <div className="col-12 col-md-3"></div>
                            <div className="col-7">
                                <h5 className="corousal-heading">LOOKBOOK </h5>
                                <p className="corousal-para">
                                    {' '}
                                    TRY TO BE NEW LOOK{' '}
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
                            height={500}
                            src={sliderimagetwo}
                            alt="First slide"
                        />
                        <Carousel.Caption className="dashboard-corousal">
                            <div className="col-5"></div>
                            <div className="col-4">
                                <h5 className="corousal-heading">SEPTEMBER </h5>
                                <p className="corousal-para">
                                    {' '}
                                    SEASON SALE 75 % DISCOUNT{' '}
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
                            height={500}
                            src={sliderimagethree}
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
                </Carousel>
                <div className="dashboard-category-div">
                    {category.length > 0 ? (
                        category.map((i, idx) => (
                            <div
                                className="dashboard-category-section"
                                key={idx}
                            >
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
                </div>
            </div>
            <div className="topnav mt-4 search-container ">
                <input
                    type="text"
                    placeholder="Search jewelleries,watches,bags,tops..."
                    className="form-control mb-2 "
                    style={{
                        margin: '15px auto',
                        borderRadius: '10px',
                        width: '50%'
                    }}
                    //onchange
                />
            </div>
            <div className="products-category-section">
                <div className="product-category-text">
                    <h2 className="ps-4 category-whatsspecial">
                        WHATS SPECIAL
                    </h2>
                    <hr
                        style={{
                            background: '#ADD8E6',
                            color: '#ADD8E6',
                            borderColor: '#ADD8E6',
                            height: '3px', 
                            margin:'0px 10px 0px 10px'                                                  
                        }}
                    />
                    <p className='category-whatsspecial-subheading'>FOR TODAY ?</p>
                </div>

                {/* <CategoryCard></CategoryCard> */}
                <div className='product-card d-flex'>
                {productdata.map((i)=>(
                    <ProductCard title={i.name} price={i.price}></ProductCard>
                    ))}
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Shop;
