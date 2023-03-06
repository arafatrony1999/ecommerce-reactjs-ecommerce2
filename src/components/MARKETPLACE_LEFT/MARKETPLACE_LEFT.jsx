import React from 'react';
import MAINCATAGORIESALL from '../HOMEPAGE_TOP/MAIN_CATAGORIES/MAIN_CATAGORIES_ALL/MAIN_CATAGORIES_ALL';

import { FiX } from "react-icons/fi";
import SLIDER from '../SLIDER/SLIDER';
import PriceFormat from '../../helper/PriceFormat';

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
                    <span>Filter by Price</span>
                    <div className="price-range">
                        <span>
                            <PriceFormat price={0} /></span>
                        <span>
                            <PriceFormat price={100000} />
                        </span>
                    </div>
                    <SLIDER />
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

            <button className='all-filter-clr'>Clear All Filter</button>
        </div>
    );
}

export default MARKETPLACELEFT;
