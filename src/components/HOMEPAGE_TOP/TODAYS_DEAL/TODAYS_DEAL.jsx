import React from 'react';
import { Link } from 'react-router-dom';

import product1 from './../../../assets/images/product1.png';
import product2 from './../../../assets/images/product2.png';

const TODAYSDEAL = () => {
    return (
        <div className='todays-deal'>
            <div className="todays-deal-title">
                Today's Deal <span>HOT</span>
            </div>
            <div className="todays-deal-items">
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product1} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product2} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product2} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product1} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product1} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product2} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product2} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
                <Link to='/product' className="todays-deal-item">
                    <div className="todays-deal-image">
                        <img src={product1} alt="" />
                    </div>
                    <div className="todays-deal-others">
                        <div className="todays-deal-name">Singer TV</div>
                        <div className="todays-deal-price">৳ 41,565.00</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TODAYSDEAL;
