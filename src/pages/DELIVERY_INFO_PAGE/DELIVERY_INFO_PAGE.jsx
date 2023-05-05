import React from 'react'
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD'
import CARTNAV from '../../components/CART_NAV/CART_NAV'
import DELIVERY_INFO_CONTAINER from '../../components/DELIVERY_INFO_CONTAINER/DELIVERY_INFO_CONTAINER'

const DELIVERY_INFO_PAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Select Delivery Method" />
            <CARTNAV stage={3} />
            <DELIVERY_INFO_CONTAINER />
        </div>
    )
}

export default DELIVERY_INFO_PAGE