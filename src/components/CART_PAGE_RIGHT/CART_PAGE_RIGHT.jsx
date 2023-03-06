import React from 'react';
import CARTITEMCONTAINER from '../CART_ITEM_CONTAINER/CART_ITEM_CONTAINER';
import CARTNAV from '../CART_NAV/CART_NAV';
import CARTSUBTOTAL from '../CART_SUBTOTAL/CART_SUBTOTAL';
import PROFILEBREAD from '../PROFILE_BREAD/PROFILE_BREAD';

const CARTPAGERIGHT = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Cart Items" />
            <CARTNAV />
            <CARTITEMCONTAINER />
            <CARTSUBTOTAL />
        </div>
    );
}

export default CARTPAGERIGHT;
