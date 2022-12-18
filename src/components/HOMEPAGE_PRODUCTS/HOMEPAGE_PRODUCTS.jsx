import React from 'react';

import { AiOutlineStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const HOMEPAGEPRODUCTS = (props) => {

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
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='homepage-products'>
            <div className="product-title">
                <span>New Products</span>
            </div>
            <div className="product-carousel">
                <Slider {...settings}>
                    {
                        props.items.map((item, index) => {
                            return(
                                <div key={index} className="product-container">
                                    <Link to='/product' className="product-card">
                                        <div className="off-tag">
                                            <span>OFF</span>
                                            <span>50%</span>
                                        </div>

                                        <div className="hover-buttons">
                                            <button className="single-hover-btn">
                                                <FiRefreshCw />
                                            </button>
                                            <button className="single-hover-btn">
                                                <BsCart />
                                            </button>
                                        </div>

                                        <div className="product-image">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-price">
                                                <div className="cut-price">
                                                    <del>$ 172,450.00</del>
                                                </div>
                                                <div className="original-price">
                                                    $ {item.mainPrice}.00
                                                </div>
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
    );
}

export default HOMEPAGEPRODUCTS;
