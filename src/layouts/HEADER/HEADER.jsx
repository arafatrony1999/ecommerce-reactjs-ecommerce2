import React, { useState, useEffect } from 'react';

import bd from './../../assets/images/bd.png';
import en from './../../assets/images/en.png';
import logo from './../../assets/images/logo.svg';

import { FaAngleDown, FaSearch, FaGooglePlay, FaPhoneVolume } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { MdKeyboardBackspace } from "react-icons/md";

import { Link, NavLink } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

import { useUserContext } from '../../context/UserContext';
import { useCartContext } from '../../context/CartContext';
import { useCompareContext } from '../../context/CompareContext';

const HEADER = (props) => {
    const [allLang, setAllLang] = useState(false);
    const [toggle, setToggle] = useState(true);

    const { user } = useUserContext();
    const { total_item } = useCartContext();
    const { compareCount } = useCompareContext();


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

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                document.getElementById('header-fixed').classList.add('header-fixed-active')
            }else{
                document.getElementById('header-fixed').classList.remove('header-fixed-active')
            }
        })
    }, [])


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
                                user.length !== 0 && user[0].user === 0 ? 
                                <span>
                                    <NavLink to="login">Login</NavLink>
                                    <NavLink to="regestration">Regestration</NavLink>
                                </span> : 
                                <span>
                                    <NavLink to="/user/dashboard">My Profile</NavLink>
                                    <button onClick={logout}>Logout</button>
                                </span>
                            }
                        </div>
                    </div>
                </div>

                            


                <div id='header-fixed' className="header-fixed">
                    <div className="header-middle-mobile">
                        <Link to="/" className="mobile-logo-div">
                            <img src={logo} alt="" />
                        </Link>
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
                    <div className="header-middle">
                        <Link to="/" className="logo-div">
                            <img src={logo} alt="Logo" />
                        </Link>

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
                                <Link to="/user/compare-list">
                                    <div className="other-link-inside-a">
                                        <div className="other-link-icon">
                                            <FiRefreshCw />
                                        </div>
                                        <div className="other-link-text">
                                            <div className="text-count">{ compareCount && compareCount }</div>
                                            <div className="text-title">Compare</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/user/cart">
                                    <div className="other-link-inside-a">
                                        <div className="other-link-icon">
                                            <BsCart />
                                        </div>
                                        <div className="other-link-text">
                                            {/* <div className="text-count">{cartCount}</div> */}
                                            <div className="text-count">{total_item && total_item}</div>
                                            <div className="text-title">My-Cart</div>
                                        </div>
                                    </div>
                                </Link>
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
