import React from 'react'
import { Link } from 'react-router-dom'

const CART_BTNS = () => {
    return (
        <div className='cart-last-btns'>
            <Link to='marketplace' className="btn btn-danger">Continue Shopping</Link>
            <Link to='/user/checkout' className="btn btn-success">Checkout</Link>
        </div>
    )
}

export default CART_BTNS