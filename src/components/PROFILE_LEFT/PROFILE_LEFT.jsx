import React from 'react';

import { NavLink } from 'react-router-dom';

const PROFILELEFT = () => {
    return (
        <div className='profile-left'>
            <ul>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart Items</NavLink>
                </li>
                <li>
                    <NavLink to="/orders">Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
                <li>
                    <NavLink to="/transection">Transections</NavLink>
                </li>
                <li>
                    <NavLink to="/address">My Address</NavLink>
                </li>
                <li>
                    <NavLink to="/compare">My Compare List</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PROFILELEFT;
