import React from 'react';
import { Link } from 'react-router-dom';
import PriceFormat from '../../helper/PriceFormat';
import Rating from '@mui/material/Rating';
import { useCartContext } from '../../context/CartContext';
import { useCompareContext } from '../../context/CompareContext';

const PRODUCTCARDLIST = (props) => {

    const { addToCart } = useCartContext();
    const { addToCompare } = useCompareContext();

    return (
        <Link to={`/product/product_id=${props.item.id}`} className='product-card-list'>
            <div className="product-list-left">
                <img src={props.item.image} alt="" />
                {
                    props.item.discount &&
                    <div className="off-tag">
                        <span>OFF</span>
                        <span>{props.item.discount.discount_percent}%</span>
                    </div>
                }
            </div>
            <div className="product-list-right">
                <h5>{props.item.name}</h5>
                <div className="list-rating">
                    <Rating name="read-only" precision={0.2} value={4} readOnly />
                    <div className="list-total-review">
                        (<span>25</span>Reviews )
                    </div>
                </div>
                <div className="product-list-price">
                    <span className="list-main-price">
                        {
                            props.item.discount ? 
                            <>
                                <div className="price-off">
                                    <span>Today's deal : </span>
                                    <PriceFormat price={props.item.price-props.item.price*(props.item.discount.discount_percent/100)} />
                                </div>
                                <div className="main-price">
                                    <span>Price : </span>
                                    <del>
                                        <PriceFormat price={props.item.price} />
                                    </del>
                                </div>
                            </> :
                            <>
                                <span>Price : </span>
                                <PriceFormat price={props.item.price} />
                            </>
                        }
                    </span>
                </div>

                <div className="product-list-buttons">
                    <div className="list-cart-btn">
                        <button onClick={ (e) => addToCart(e, 1, props.item)}>Add to Cart</button>
                    </div>
                    <div className="list-view-btn">
                        <button onClick={ (e) => addToCompare(e, props.item) }>Add to Compare</button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PRODUCTCARDLIST;
