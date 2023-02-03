import React, { useState, useContext } from 'react';

import { userContext } from '../../customHooks/userContext';

import bd from './../../assets/images/bd.png';
import en from './../../assets/images/en.png';
import logo from './../../assets/images/logo.svg';

import { FaAngleDown, FaSearch, FaGooglePlay, FaPhoneVolume } from "react-icons/fa";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { MdKeyboardBackspace } from "react-icons/md";

import { NavLink } from 'react-router-dom';

const HEADER = () => {
    const [allLang, setAllLang] = useState(false);
    const [toggle, setToggle] = useState(true);

    const user = useContext(userContext);

    const handleAllLang = () => {
        setAllLang(!allLang);
    }
    const handleToggle = () => {
        setToggle(false)
    }
    const handleNotToggle = () => {
        setToggle(true)
    }

    const logout = () => {
        localStorage.removeItem('auth');
        window.location.replace('/login');
    }
    console.log(user);

    return (
        <header>
            <div className="header">

                <div className="header-top">
                    <div className="header-top-left">
                        <div className="header-top-lang">

                            <div className="selected-lang" onClick={handleAllLang}>
                                <span>
                                    <img src={en} alt="" />
                                </span>
                                <span className='text-op'>English</span>
                                <span className='text-op'>
                                    <FaAngleDown />
                                </span>
                            </div>

                            <div className={allLang ? "all-lang" : "all-lang d-none"}>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <img src={bd} alt="" />
                                            <span>Bangla</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <img src={en} alt="" />
                                            <span>English</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-top-curren">
                            <div className="selected-curren">
                                <span className='text-op'>USD $</span>
                                <span className='text-op'>
                                    <FaAngleDown />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="header-top-right">
                                {
                                    user===null ? 
                                        <span>
                                            <NavLink to="login">Login</NavLink>
                                            <NavLink to="regestration">Regestration</NavLink>
                                        </span> : 
                                        <span>
                                            <NavLink to="profile">My Profile</NavLink>
                                            <button onClick={logout}>Logout</button>
                                        </span>
                                }
                        </div>
                    </div>
                </div>


                <div className="header-middle-mobile">
                    <div className="mobile-logo-div">
                        <img src={logo} alt="" />
                    </div>
                    <div className="mobile-search-btn">
                        <CiSearch onClick={handleToggle} />
                    </div>

                    <div className={toggle ? "mobile-toggle-search" : "mobile-toggle-search show-toggle"}>
                        <div className='form'>
                            <input type="text" placeholder='I am shopping for....' />
                            <button onClick={handleNotToggle}>
                                <MdKeyboardBackspace />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="header-fixed fixed-header">
                    <div className="header-middle">
                        <div className="logo-div">
                            <img src={logo} alt="Logo" />
                        </div>

                        <div className="search-div">
                            <div className="search-box">
                                <input type="text" placeholder='I am looking for ...' />
                                <button>
                                    <span>
                                        <FaSearch style={{color:"#C1944F"}} />
                                    </span>
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>

                        <div className="other-div">
                            <div className="other-links">
                                <a href="/">
                                    <div className="other-link-inside-a">
                                        <div className="other-link-icon">
                                            <FiRefreshCw />
                                        </div>
                                        <div className="other-link-text">
                                            <div className="text-count">0</div>
                                            <div className="text-title">Compare</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/">
                                    <div className="other-link-inside-a">
                                        <div className="other-link-icon">
                                            <CiShoppingCart />
                                        </div>
                                        <div className="other-link-text">
                                            <div className="text-count">0</div>
                                            <div className="text-title">My-Cart</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>


                    <div className="header-bottom">

                        <div className="header-bottom-left">
                            Largest Wholesale Marketplace
                        </div>

                        <div className="header-bottom-middle">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/marketplace">Marketplace</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/rfq">Global RFQ</NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="header-bottom-right">
                            <div className="bottom-right-left">
                                <a href="/">
                                    <FaGooglePlay /> Download App
                                </a>
                            </div>
                            <div className="bottom-right-right">
                                <div className="hotline">
                                    <FaPhoneVolume /> Hotline :
                                </div>
                                <div className="hotline-numbers">
                                    <div className="numbers-div">
                                        <a href="tel:+">+8801879923111</a>
                                    </div>
                                    <div className="numbers-div">
                                        <a href="tel:+">+8801879923111</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HEADER;
