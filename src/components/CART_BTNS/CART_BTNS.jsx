import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CART_BTNS = () => {
    const { cart } = useCartContext()

    return (
        <div className='cart-last-btns'>
            <Link to='marketplace' className="btn btn-danger">Continue Shopping</Link>
            <Link to='/user/checkout' className={cart.length === 0 ? "btn btn-success disabled" : "btn btn-success"}>Checkout</Link>
        </div>
    )
}

export default CART_BTNS