import React from 'react';

import { AiOutlineStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useCartContext } from '../../context/CartContext';
import PriceFormat from '../../helper/PriceFormat';

const HOMEPAGEPRODUCTS = (props) => {


    const { addToCart } = useCartContext();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='homepage-products'>
                <div className="product-title">
                    <span>{props.title}</span>
                </div>
                <div className="product-carousel">
                    <Slider {...settings}>
                        {
                            props.items && props.items.map((item, index) => {
                                return(
                                    <div key={index} className="product-container">
                                        <Link to={'/product/product_id='+item.id} className="product-card">
                                            { 
                                                item.offers !==0 &&
                                                <div className="off-tag">
                                                    <span>OFF</span>
                                                    <span>{item.discount && item.discount.discount_percent}%</span>
                                                </div>
                                            }

                                            <div className="hover-buttons">
                                                <button className="single-hover-btn">
                                                    <FiRefreshCw />
                                                </button>
                                                <button onClick={(e) => addToCart(e, 1, item) } className="single-hover-btn">
                                                    <BsCart />
                                                </button>
                                            </div>

                                            <div className="product-image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="product-details">
                                                <div className="product-price">
                                                    {
                                                        item.offers===0 ? 
                                                        <div style={{paddingLeft: "0"}} className="original-price">
                                                            <PriceFormat price={item.price} />
                                                        </div> : 
                                                        <>
                                                            <div style={{paddingLeft: "0"}} className="original-price">
                                                                <PriceFormat price={item.price - (item.price*(item.discount && item.discount.discount_percent/100))} />
                                                            </div>
                                                            <div style={{paddingLeft: "10px"}} className="cut-price">
                                                                <del>
                                                                    <PriceFormat price={item.price} />
                                                                </del>
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                                <div className="product-rating">
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                </div>
                                                <div className="product-name">
                                                    {item.name}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default HOMEPAGEPRODUCTS;
