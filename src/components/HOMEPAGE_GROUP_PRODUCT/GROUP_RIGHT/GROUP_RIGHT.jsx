import React, { Fragment, useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import placeholder from './../../../assets/images/placeholder.jpg';
import PriceFormat from '../../../helper/PriceFormat';

const GROUPRIGHT = (props) => {
    const [loaded, setLoaded] = useState(false)
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
                        props.products && props.products.slice(0,6).map((product, index) => {
                            return(
                                <Fragment key={product.id}>
                                    {
                                    !loaded && 
                                        <div className="group-left-product">
                                            <div className="left-product-image">
                                                <img src={placeholder} alt="asdfasfdas" />
                                            </div>
                                            <div className="left-product-title">
                                                $ {0}.00
                                            </div>
                                        </div>
                                    }
                                
                                    <Link style={loaded ? {} : { display: 'none' }} to={'/product/product_id='+product.id} className="group-left-product">
                                        <div className="left-product-image">
                                            <img onLoad={() => setLoaded(true)} src={product.image} alt="asdfasfdas" />
                                        </div>
                                        <div className="left-product-title">
                                            <PriceFormat price={product.price} />
                                        </div>
                                    </Link>
                                </Fragment>
                            )
                        })
                    }
                </div>
        </div>
    );
}

export default GROUPRIGHT;
