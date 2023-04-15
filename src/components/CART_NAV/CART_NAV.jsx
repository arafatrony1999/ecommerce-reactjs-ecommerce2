import React from 'react';
import { BsCart3, BsMap, BsTruck, BsCreditCard, BsCheckCircle, BsChevronRight } from "react-icons/bs";

const CARTNAV = (props) => {
    return (
        <div className='cart-nav'>
            <div className={props.stage === 1 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 1 ? 'cart-done' : ''}>
                <div className="single-cart-nav-icon">
                    <BsCart3 />
                </div>
                <div className="single-cart-nav-text">
                    1. My Cart
                </div>
            </div>


            <div className={props.stage === 2 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 2 ? 'cart-done' : ''}>
                <BsChevronRight />
            </div>
            <div className={props.stage === 2 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 2 ? 'cart-done' : ''}>
                <div className="single-cart-nav-icon">
                    <BsMap />
                </div>
                <div className="single-cart-nav-text">
                    2. Shipping Info
                </div>
            </div>


            <div className={props.stage === 3 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 3 ? 'cart-done' : ''}>
                <BsChevronRight />
            </div>
            <div className={props.stage === 3 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 3 ? 'cart-done' : ''}>
                <div className="single-cart-nav-icon">
                    <BsTruck />
                </div>
                <div className="single-cart-nav-text">
                    3. Delivery Info
                </div>
            </div>


            <div className={props.stage === 4 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 4 ? 'cart-done' : ''}>
                <BsChevronRight />
            </div>
            <div className={props.stage === 4 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 4 ? 'cart-done' : ''}>
                <div className="single-cart-nav-icon">
                    <BsCreditCard />
                </div>
                <div className="single-cart-nav-text">
                    4. Payment Info
                </div>
            </div>


            <div className={props.stage === 5 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 5 ? 'cart-done' : ''}>
                <BsChevronRight />
            </div>
            <div className={props.stage === 5 ? "single-cart-nav active" : "single-cart-nav"} id={props.stage > 5 ? 'cart-done' : ''}>
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
