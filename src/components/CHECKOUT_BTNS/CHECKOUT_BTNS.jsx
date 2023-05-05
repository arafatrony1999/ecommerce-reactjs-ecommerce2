import React from 'react'
import { Link } from 'react-router-dom'

const CHECKOUT_BTNS = () => {
    return (
        <div className='cart-last-btns'>
            <Link to='/marketplace' className="btn btn-danger">Return to Shop</Link>
            <Link to='/user/delivery-info' className="btn btn-success">Continue to Delivery Info</Link>
        </div>
    )
}

export default CHECKOUT_BTNS