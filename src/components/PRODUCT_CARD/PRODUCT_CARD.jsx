import React from 'react';

import { AiOutlineStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from 'react-router-dom';

const PRODUCTCARD = (props) => {
    return (
        <>
            <Link to='/product' className="product-card">
                <div className="off-tag">
                    <span>OFF</span>
                    <span>{props.item.offPrice}%</span>
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
                    <img src={props.item.img} alt="" />
                </div>
                <div className="product-details">
                    <div className="product-price">
                        <div className="cut-price">
                            <del>$ {props.item.mainPrice}.00</del>
                        </div>
                        <div className="original-price">
                            $ {props.item.mainPrice-props.item.mainPrice*(props.item.offPrice/100)}.00
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
                        {props.item.name}
                    </div>
                </div>
            </Link>
        </>
    );
}

export default PRODUCTCARD;
