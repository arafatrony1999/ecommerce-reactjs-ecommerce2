import React from 'react';
import CARTITEMCONTAINER from '../CART_ITEM_CONTAINER/CART_ITEM_CONTAINER';
import CARTNAV from '../CART_NAV/CART_NAV';
import CARTSUBTOTAL from '../CART_SUBTOTAL/CART_SUBTOTAL';
import PROFILEBREAD from '../PROFILE_BREAD/PROFILE_BREAD';
import CART_BTNS from '../CART_BTNS/CART_BTNS';

const CARTPAGERIGHT = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Cart Items" />
            <CARTNAV stage={1} />
            <CARTITEMCONTAINER />
            <CARTSUBTOTAL />
            <CART_BTNS />
        </div>
    );
}

export default CARTPAGERIGHT;
