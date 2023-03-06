import React from 'react';

import { AiOutlineStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PriceFormat from '../../helper/PriceFormat';
import { useCartContext } from '../../context/CartContext';
import { useCompareContext } from '../../context/CompareContext';

const PRODUCTCARD = (props) => {
    const { addToCart } = useCartContext();
    const { addToCompare } = useCompareContext();
    return (
        <>
            <Link to={`/product/product_id=${props.item.id}`} className="product-card">
                {
                    props.item.discount !== null &&
                    <div className="off-tag">
                        <span>OFF</span>
                        <span>{props.item.discount.discount_percent}%</span>
                    </div>
                }
                

                <div className="hover-buttons">
                    <button onClick={(e) => addToCompare(e, props.item)} className="single-hover-btn">
                        <FiRefreshCw />
                    </button>
                    <button onClick={(e) => addToCart(e, 1, props.item)} className="single-hover-btn">
                        <BsCart />
                    </button>
                </div>

                <div className="product-image">
                    <img src={props.item.image} alt="" />
                </div>
                <div className="product-details">
                    <div className="product-price">
                        {
                            props.item.discount === null ?
                            <div style={{padding: "0"}} className="original-price">
                                <PriceFormat price={props.item.price} />
                            </div> :
                            <>
                                <div style={{padding: "0"}} className="original-price">
                                    <PriceFormat price={props.item.price-props.item.price*(props.item.discount.discount_percent/100)} />
                                </div>
                                <div style={{paddingLeft: "10px"}} className="cut-price">
                                    <del>
                                        <PriceFormat price={props.item.price} />
                                    </del>
                                </div>
                            </>
                        }
                    </div>
                    <div className="product-rating">
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                    <div className="product-name">
                        {props.item.name}
                    </div>
                </div>
            </Link>
        </>
    );
}

export default PRODUCTCARD;
