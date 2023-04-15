import React from 'react'
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD';
import CARTNAV from '../../components/CART_NAV/CART_NAV';
import ADDRESSES from '../../components/ADDRESSES/ADDRESSES';

const CHECKOUT_PAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Select Delivery Address" />
            <CARTNAV stage={2} />
            <ADDRESSES />
        </div>
    )
}

export default CHECKOUT_PAGE