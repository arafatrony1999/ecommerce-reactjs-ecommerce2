import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { BsList, BsXSquare, BsHouse, BsCart2, BsJournalCheck, BsHeart, BsCurrencyDollar, BsCash, BsPeople, BsPinMap, BsShuffle, BsDownload } from "react-icons/bs";

import avatar from './../../assets/images/avatar.png';

const PROFILELEFT = (props) => {
    const [slider, setSlider] = useState(false)
    return (
        <div className='profile-left'>
            <div className="profile-left-mobile">
                <button onClick={ () => {setSlider(true)} }>
                    <BsList />
                </button>
            </div>

            <div className={slider ? "profile-left-main active" : "profile-left-main"}>
                <div className="profile-left-info">
                    <div className="profile-left-cross">
                        <button onClick={ () => {setSlider(false)} }>
                            <BsXSquare />
                        </button>
                    </div>
                    <div className="profile-avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="profile-name">
                        {props.user.name}
                    </div>
                    <div className="profile-email">
                        {props.user.user}
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink to="/user/dashboard">
                            <span style={{paddingRight: "20px"}}>
                                <BsHouse />
                            </span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/profile">
                            <span style={{paddingRight: "20px"}}>
                                <BsPeople />
                            </span>
                            Manage Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/cart">
                            <span style={{paddingRight: "20px"}}>
                                <BsCart2 />
                            </span>
                            Cart Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/orders">
                            <span style={{paddingRight: "20px"}}>
                                <BsJournalCheck />
                            </span>
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/compare-list">
                            <span style={{paddingRight: "20px"}}>
                                <BsShuffle />
                            </span>
                            My Compare List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/wishlist">
                            <span style={{paddingRight: "20px"}}>
                                <BsHeart />
                            </span>
                            Wishlist
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/transection">
                            <span style={{paddingRight: "20px"}}>
                                <BsCurrencyDollar />
                            </span>
                            Transections
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/my-rfq">
                            <span style={{paddingRight: "20px"}}>
                                <BsCash />
                            </span>
                            RFQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/address">
                            <span style={{paddingRight: "20px"}}>
                                <BsPinMap />
                            </span>
                            My Address
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/downloads">
                            <span style={{paddingRight: "20px"}}>
                                <BsDownload />
                            </span>
                            Downloads
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PROFILELEFT;
