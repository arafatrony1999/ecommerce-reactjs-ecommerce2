import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../../context/productContext';
import PriceFormat from '../../../helper/PriceFormat';

const TODAYSDEAL = () => {
    const { products } = useProductContext();
    return (
        <div className='todays-deal'>
            <div className="todays-deal-title">
                Today's Deal <span>HOT</span>
            </div>
            <div className="todays-deal-items">
                {
                    products.filter((product) => {
                        return product.discount !== null
                    }).slice(0,8).map((product) => {
                        return(
                            <Link to={`/product/product_id=${product.id}`} key={product.id} className="todays-deal-item">
                                <div className="todays-deal-image">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="todays-deal-others">
                                    <div className="todays-deal-name">{product.name.slice(0,10)}...</div>
                                    <div className="todays-deal-price">
                                        <PriceFormat price={product.price - product.price*(product.discount.discount_percent/100)} />
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TODAYSDEAL;
