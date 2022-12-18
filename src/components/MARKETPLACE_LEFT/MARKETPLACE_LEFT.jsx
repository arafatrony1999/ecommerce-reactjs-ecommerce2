import React from 'react';
import MAINCATAGORIESALL from '../HOMEPAGE_TOP/MAIN_CATAGORIES/MAIN_CATAGORIES_ALL/MAIN_CATAGORIES_ALL';

import { FiX } from "react-icons/fi";

const MARKETPLACELEFT = () => {

    const handleSideBar = () => {
        document.querySelector('.marketplace-left').classList.remove('marketplace-left-auto')
    }

    return (
        <div className='marketplace-left'>
            <div className="sidebar-mobile">
                <span>Filters</span>
                <span onClick={handleSideBar} className='sidebar-cross'>
                    <FiX />
                </span>
            </div>

            <MAINCATAGORIESALL />

            <div className="price-filter">
                <div className="main-catagory-top">
                    <span>Price Range</span>
                    <input type="range" name="" id="" />
                </div>
            </div>
            <div className="price-filter">
                <div className="main-catagory-top">
                    <span>Filter by Size</span>
                </div>
            </div>
            <div className="price-filter">
                <div className="main-catagory-top">
                    <span>Filter by Febric</span>
                </div>
            </div>
        </div>
    );
}

export default MARKETPLACELEFT;
