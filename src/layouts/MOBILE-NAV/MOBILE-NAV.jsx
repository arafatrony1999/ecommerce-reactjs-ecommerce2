import React from 'react';
import { SlHome } from "react-icons/sl";
import { BiShoppingBag } from "react-icons/bi";
import { BsListTask, BsBell } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const MOBILENAV = () => {
    return (
        <div className='mobile-nav'>
            <NavLink to="/" className="mobile-nav-items">
                <span>
                    <SlHome />
                </span>
                <span>Home</span>
            </NavLink>
            <div className="mobile-nav-items">
                <span>
                    <BsListTask />
                </span>
                <span>Catagories</span>
            </div>
            <div className="mobile-nav-items">
                <span>
                    <BiShoppingBag />
                </span>
                <span>Cart (0)</span>
            </div>
            <NavLink to="regestration" className="mobile-nav-items">
                <span>
                    <BsBell />
                </span>
                <span>Notifications</span>
            </NavLink>
            <NavLink to="login" className="mobile-nav-items">
                <span>
                    <FaRegUserCircle />
                </span>
                <span>Account</span>
            </NavLink>
        </div>
    );
}

export default MOBILENAV;
