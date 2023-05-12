import React from 'react'
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD';
import CARTNAV from '../../components/CART_NAV/CART_NAV';
import ADDRESSES from '../../components/ADDRESSES/ADDRESSES';
import CHECKOUT_BTNS from '../../components/CHECKOUT_BTNS/CHECKOUT_BTNS';

const CHECKOUT_PAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Select Delivery Address" />
            <CARTNAV stage={2} />
            <ADDRESSES />
            <CHECKOUT_BTNS />
        </div>
    )
}

export default CHECKOUT_PAGE