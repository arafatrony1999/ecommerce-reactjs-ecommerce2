import React from 'react';

import { NavLink } from 'react-router-dom';

import { BsHouse, BsCart2, BsJournalCheck, BsHeart, BsCurrencyDollar, BsCash, BsPeople, BsPinMap, BsShuffle, BsDownload, BsCashCoin } from "react-icons/bs";

import avatar from './../../assets/images/avatar.png';

const PROFILELEFT = () => {
    return (
        <div className='profile-left'>
            <div className="profile-left-info">
                <div className="profile-avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="profile-name">
                    Arafat Rony
                </div>
                <div className="profile-email">
                    arafat.rony1999@gmail.com
                </div>
            </div>
            <ul>
                <li>
                    <NavLink to="/profile">
                        <span style={{paddingRight: "20px"}}>
                            <BsHouse />
                        </span>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        <span style={{paddingRight: "20px"}}>
                            <BsCart2 />
                        </span>
                        Cart Items
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders">
                        <span style={{paddingRight: "20px"}}>
                            <BsJournalCheck />
                        </span>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist">
                        <span style={{paddingRight: "20px"}}>
                            <BsHeart />
                        </span>
                        Wishlist
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/transection">
                        <span style={{paddingRight: "20px"}}>
                            <BsCurrencyDollar />
                        </span>
                        Transections
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-rfq">
                        <span style={{paddingRight: "20px"}}>
                            <BsCash />
                        </span>
                        RFQ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/address">
                        <span style={{paddingRight: "20px"}}>
                            <BsPinMap />
                        </span>
                        My Address
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/compare">
                        <span style={{paddingRight: "20px"}}>
                            <BsShuffle />
                        </span>
                        My Compare List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/downloads">
                        <span style={{paddingRight: "20px"}}>
                            <BsDownload />
                        </span>
                        Downloads
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/edit-profile">
                        <span style={{paddingRight: "20px"}}>
                            <BsPeople />
                        </span>
                        Manage Profile
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PROFILELEFT;
