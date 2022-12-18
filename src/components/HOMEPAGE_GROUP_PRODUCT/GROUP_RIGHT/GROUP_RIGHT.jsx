import React from 'react';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const GROUPRIGHT = (props) => {
    return (
        <div className='group-right'>
            <div className="group-right-title">
                <div className="group-main-title">Featured Products</div>
                <div className="group-main-link">
                    <a href="/">View All <BsChevronRight /></a>
                </div>
            </div>
            
            <div className="group-left-products">
                    {
                        props.featured.map((product, index) => {
                            return(
                                <Link key={index} to='/product' className="group-left-product">
                                    <div className="left-product-image">
                                        <img src={product.img} alt="" />
                                    </div>
                                    <div className="left-product-title">
                                        {product.price}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
        </div>
    );
}

export default GROUPRIGHT;
