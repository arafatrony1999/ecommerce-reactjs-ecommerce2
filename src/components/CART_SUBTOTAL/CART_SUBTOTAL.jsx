import React from 'react';
import { useCartContext } from '../../context/CartContext';
import PriceFormat from '../../helper/PriceFormat';

const CARTSUBTOTAL = () => {
    const { sub_total } = useCartContext();
    return (
        <div className='cart_subtotal'>
            <div className="cart-subtotal-left">Sub Total</div>
            <div className="cart-subtotal-right">
                <PriceFormat price={sub_total} />
            </div>
        </div>
    );
}

export default CARTSUBTOTAL;
