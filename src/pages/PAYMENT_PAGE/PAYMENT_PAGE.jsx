import React from 'react'
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD'
import CARTNAV from '../../components/CART_NAV/CART_NAV'
import PAYMENT_METHODS_CONTAINER from '../../components/PAYMENT_METHODS_CONTAINER/PAYMENT_METHODS_CONTAINER'
import PAYMENT_INPUT_CONTAINER from '../../components/PAYMENT_INPUT_CONTAINER/PAYMENT_INPUT_CONTAINER'
import COUPON_CONTAINER from '../../components/COUPON_CONTAINER/COUPON_CONTAINER'
import PAYMENT_PAGE_ITEMS from '../../components/PAYMENT_PAGE_ITEMS/PAYMENT_PAGE_ITEMS'
import PAYMENT_PAGE_BTNS from '../../components/PAYMENT_PAGE_BTNS/PAYMENT_PAGE_BTNS'
import AGREE_POLICY from '../../components/AGREE_POLICY/AGREE_POLICY'

const PAYMENT_PAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle='Select Payment Option' />
            <CARTNAV stage={4} />
            <PAYMENT_METHODS_CONTAINER />
            <PAYMENT_INPUT_CONTAINER />
            <COUPON_CONTAINER />
            <PAYMENT_PAGE_ITEMS />
            <AGREE_POLICY />
            <PAYMENT_PAGE_BTNS />
        </div>
    )
}

export default PAYMENT_PAGE