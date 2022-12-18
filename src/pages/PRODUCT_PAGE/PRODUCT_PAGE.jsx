import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import item1 from './../../assets/images/item1.jpg';
import item2 from './../../assets/images/item2.png';
import item3 from './../../assets/images/item3.png';
import item4 from './../../assets/images/item4.png';
import item5 from './../../assets/images/item5.jpg';
import item6 from './../../assets/images/item6.jpg';
import item7 from './../../assets/images/item7.jpg';
import item8 from './../../assets/images/item8.png';
import item9 from './../../assets/images/item9.jpg';
import item10 from './../../assets/images/item10.jpg';
import HOMEPAGEPRODUCTS from './../../components/HOMEPAGE_PRODUCTS/HOMEPAGE_PRODUCTS';

import { BsEnvelope, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";



const PRODUCTPAGE = () => {
    const price = 20;
    const minQty = 90;

    const [descp, setDescp] = useState(true);
    const [qty, setQty] = useState(minQty);

    const handleIncrement = () => {
        setQty(qty+1)
    }
    const handleDecrement = () => {
        setQty(qty-1)
    }


    const handleChangeDesc = () => {
        setDescp(true)
    }
    const handleChangeReviews = () => {
        setDescp(false)
    }

    const desc = [
        {
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, eveniet. Hic, ut dolor. Ad, veniam. Voluptatem quibusdam deleniti expedita nostrum sit laudantium repudiandae alias mollitia vitae officia. Aliquam, molestiae error.",
            reviews : 'Amet consectetur adipisicing elit. Quae, eveniet. Hic, ut dolor. Ad, veniam. Voluptatem quibusdam deleniti expedita nostrum sit laudantium repudiandae alias mollitia vitae officia. Aliquam, molestiae error.'
        }
    ]

    
    const items = [
        {
            img : item1,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item2,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item3,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item4,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item5,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item6,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item7,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item8,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item9,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item10,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        }
    ]

    return (
        <div className="product-page">
            <div className="product-page-left">
                <div className="big-img">
                    <img src={item1} alt="" />
                </div>
                <div className="small-img">
                    <img src={item1} alt="" />
                    <img src={item2} alt="" />
                </div>
            </div>

            <div className="product-page-middle">
                <div className="product-middle-top">
                    <div className="product-rating product-middle-title">
                        <h4>Rongdhanu Chili powder 50 gm</h4>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span>( 0 reviews )</span>
                    </div>

                    <div className="seller-section">
                        <div className="seller-details">
                            <span>Sold By : </span>
                            <span>
                                <Link to="/">RONGDHONU</Link>
                            </span>
                        </div>
                        <div className="seller-details">
                            <button className='seller-button'>EMAIL SELLER / RFP</button>
                        </div>
                        <div className="seller-details">
                            <Link to="/">RONGDHONU</Link>
                        </div>
                    </div>

                    <div className="product-middle-price">
                        Price : <span>${price}.00</span> /per piece
                    </div>

                    <div className="product-middle-qty">
                        Quantity :
                        <div className="qty-count">
                            <button disabled={qty===minQty ? true : false} className='count-btn' onClick={handleDecrement}>-</button>
                                {qty}
                            <button className='count-btn' onClick={handleIncrement}>+</button>
                            <span className="product-available">(1000 piece available)</span>
                        </div>
                    </div>

                    <div className="product-middle-total">
                        Total Price : 
                        <span>${price * qty}.00</span>
                    </div>

                    <div className="product-middle-btns">
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                        <button>Chat Now</button>
                    </div>

                    <div className="product-others">
                        <div className="product-middle-other">
                            <div className="products-others-left">Price Update :</div>
                            <div className="products-others-right">Wholesale product price may vary. Please request for latest price before placing order.</div>
                        </div>
                        <div className="product-middle-other">
                            <div className="products-others-left">Delivery Charge :</div>
                            <div className="products-others-right">
                                Delivery charge will be based on location. We'll call you to confirm order and delivery charge.
                            </div>
                        </div>
                        <div className="product-middle-other">
                            <div className="products-others-left">Share :</div>
                            <div className="products-others-right">
                                <Link to="/" style={{background: "#0E76E6"}}><BsEnvelope /></Link>
                                <Link to="/" style={{background: "#0087BA"}}><BsTwitter /></Link>
                                <Link to="/" style={{background: "#2D4373"}}><FaFacebookF /></Link>
                                <Link to="/" style={{background: "#005983"}}><FaLinkedinIn /></Link>
                                <Link to="/" style={{background: "#1F7D1E"}}><BsWhatsapp /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-middle-middle">
                    <div className="product-middle-middle-nav">
                        <span onClick={handleChangeDesc} className={descp ? 'active-middle' : ''}>Description</span>
                        <span onClick={handleChangeReviews} className={descp ? '' : 'active-middle'}>Reviews</span>
                    </div>
                    <div className="product-middle-middle-desc">
                        <div className="middle-desc-content">
                            <p>
                                {
                                    descp ? desc[0].description : desc[0].reviews
                                        
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="product-middle-bottom">
                    <HOMEPAGEPRODUCTS items={items} />
                </div>
            </div>




            <div className="product-page-right">
                <div className="page-right-top">
                    <div className="page-right-top-title">
                        Seller Information
                    </div>
                    <div className="page-right-top-info">
                        <h6>Finix Hi Tech industry Ltd</h6>
                        <p>House-10, road-01, block-D, section -12, pallabi, mirpur, Dhaka</p>
                        <div className="page-right-top-info-reviews">
                            <div className="info-reviews-star">
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </div>
                            <div className="info-reviews-totals">
                                (0 customer reviews)
                            </div>
                        </div>
                    </div> <hr />
                    <div className="page-right-top-share-visit">
                        <div className="right-top-visit-store">
                            <Link to="/">VISIT STORE</Link>
                        </div>
                        <div className="right-top-visit-social">
                            <Link to="/"><BsEnvelope /></Link>
                            <Link to="/"><BsTwitter /></Link>
                            <Link to="/"><FaFacebookF /></Link>
                            <Link to="/"><FaLinkedinIn /></Link>
                            <Link to="/"><BsWhatsapp /></Link>
                        </div>
                    </div>
                </div>




                <div className="page-right-bottom">
                    <div className="page-right-bottom-title">Top Selling Products</div>
                    
                    {
                        items.map((item)=>{
                            return(
                                <Link to='/' className="page-right-bottom-single-product">
                                    <div className="page-right-bottom-img">
                                        <img src={item.img} alt="" />
                                    </div>

                                    <div className="page-right-bottom-desc">
                                        <div className="desc-name">{item.name}</div>
                                        <div className="desc-star">
                                            <div className="info-reviews-star">
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                            </div>
                                        </div>
                                        <div className="desc-price">${item.mainPrice}.00</div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default PRODUCTPAGE;