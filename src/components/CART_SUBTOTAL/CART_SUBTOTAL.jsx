import React from 'react';
import { useCartContext } from '../../context/CartContext';
import PriceFormat from '../../helper/PriceFormat';

const CARTSUBTOTAL = () => {
    const { sub_total } = useCartContext();
    return (
        <div className='cart-subtotal-container'>
            <div className='cart_subtotal'>
                <div className="cart-subtotal-left">Sub Total</div>
                <div className="cart-subtotal-right">
                    <PriceFormat price={sub_total} />
                </div>
            </div>
            <div className='cart_subtotal'>
                <div className="cart-subtotal-left">Tax</div>
                <div className="cart-subtotal-right">
                    <PriceFormat price={0} />
                </div>
            </div>
            <div className='cart_subtotal'>
                <div className="cart-subtotal-left">Shipping Charge</div>
                <div className="cart-subtotal-right">
                    Dhaka : <PriceFormat price={50} />
                </div>
            </div>
            <div className='cart_subtotal'>
                <div className="cart-subtotal-left"></div>
                <div className="cart-subtotal-right">
                    Outside Dhaka : <PriceFormat price={100} />
                </div>
            </div>
            <div className='cart_subtotal'>
                <div className="cart-subtotal-left">Total</div>
                <div className="cart-subtotal-right">
                    <PriceFormat price={sub_total + 100} />
                </div>
            </div>
        </div>
    );
}

export default CARTSUBTOTAL;
