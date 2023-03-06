import React from 'react';
import { BsCart3, BsMap, BsTruck, BsCreditCard, BsCheckCircle, BsChevronRight } from "react-icons/bs";

const CARTNAV = () => {
    return (
        <div className='cart-nav'>
            <div className="single-cart-nav active">
                <div className="single-cart-nav-icon">
                    <BsCart3 />
                </div>
                <div className="single-cart-nav-text">
                    1. My Cart
                </div>
            </div>
            <div className="single-cart-nav">
                <BsChevronRight />
            </div>
            <div className="single-cart-nav">
                <div className="single-cart-nav-icon">
                    <BsMap />
                </div>
                <div className="single-cart-nav-text">
                    2. Shipping Info
                </div>
            </div>
            <div className="single-cart-nav">
                <BsChevronRight />
            </div>
            <div className="single-cart-nav">
                <div className="single-cart-nav-icon">
                    <BsTruck />
                </div>
                <div className="single-cart-nav-text">
                    3. Delivery Info
                </div>
            </div>
            <div className="single-cart-nav">
                <BsChevronRight />
            </div>
            <div className="single-cart-nav">
                <div className="single-cart-nav-icon">
                    <BsCreditCard />
                </div>
                <div className="single-cart-nav-text">
                    4. Payment Info
                </div>
            </div>
            <div className="single-cart-nav">
                <BsChevronRight />
            </div>
            <div className="single-cart-nav">
                <div className="single-cart-nav-icon">
                    <BsCheckCircle />
                </div>
                <div className="single-cart-nav-text">
                    5. Confirmation
                </div>
            </div>
        </div>
    );
}

export default CARTNAV;
