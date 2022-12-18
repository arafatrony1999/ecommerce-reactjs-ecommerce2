import React from 'react';
import logo from './../../assets/images/logo.svg';
import play from './../../assets/images/play.png';
import payment from './../../assets/images/payment.png';

import { FiFacebook, FiYoutube, FiLinkedin } from "react-icons/fi";

const FOOTER = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <form action="">
                        <input type="text" placeholder='Your Email Address' />
                        <button>SUBSCRIBE</button>
                    </form>
                    <a href="/">
                        <img src={play} alt="" />
                    </a>
                </div>


                <div className="footer-top-middle">
                    <p>CONTACT INFO</p>
                    <div className="contact-info">
                        <span>Address : </span>
                        <p>5th Floor, Bashati Horizon, 17 no Road, Banani, Dhaka - 1213, Bangladesh</p>
                        <span>Phone : </span>
                        <p>
                            <a href="tel:+8801879923111">+8801879923111</a> , 
                            <a href="tel:+8801879923111">+8801879923111</a>
                        </p>
                        <span>Email : </span>
                        <p>
                            <a href="mailto:arafat.rony1999@gmaill.com">arafat.rony1999@gmaill.com</a>
                        </p>
                    </div>
                </div>


                <div className="footer-top-right">
                    <div className="footer-top-right-div">
                        <p>COMPANY</p>
                        <a href="/">About Shodagor</a>
                        <a href="/">Seller Membership</a>
                        <a href="/">Become a Seller</a>
                        <a href="/">Register Your Garments</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Contact Us</a>
                    </div>
                    <div className="footer-top-right-div">
                        <p>MY ACCOOUNT</p>
                        <a href="/">Login</a>
                        <a href="/">Order History</a>
                        <a href="/">My Wishlist</a>
                        <a href="/">Track Order</a>

                        <p>BECOME A SELLER</p>
                        <div className="seller-btn">
                            <a href="/">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    Copyright © Shodagor International Limited 2022. Developed by Schope Infotech Limited
                </div>
                <div className="footer-bottom-middle">
                    <div className="social-logo">
                        <a href="https://m.facebook.com/arafat.maruf.14" style={{background: "#3B5998"}}>
                            <FiFacebook style={{color: "white", fontSize: "16px" }} className='social-i' />
                        </a>
                        <a href="https://www.youtube.com/@nlmystery1168" style={{background: "#FF0000"}}>
                            <FiYoutube style={{color: "white", fontSize: "16px"}} className='social-i' />
                        </a>
                        <a href="/" style={{background: "#0070AC"}}>
                            <FiLinkedin style={{color: "white", fontSize: "16px"}} className='social-i' />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom-right">
                    <img src={payment} alt="" />
                </div>
            </div>

            <div className="footer-mobile-extra"></div>
        </div>
    );
}

export default FOOTER;
