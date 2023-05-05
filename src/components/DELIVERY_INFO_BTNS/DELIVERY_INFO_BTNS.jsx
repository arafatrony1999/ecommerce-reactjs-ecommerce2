import React from 'react'
import { Link } from 'react-router-dom'

const DELIVERY_INFO_BTNS = () => {
    return (
        <div className='delivery-info-btns'>
            <Link to='/user/payment-info' className="btn btn-danger">Continue to payment</Link>
        </div>
    )
}

export default DELIVERY_INFO_BTNS