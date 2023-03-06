import React from 'react';
import COMPAREITEMCONTAINER from '../../components/COMPARE_ITEM_CONTAINER/COMPARE_ITEM_CONTAINER';
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD';

const COMPAREPAGE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Compare List" />

            <COMPAREITEMCONTAINER />
        </div>
    );
}

export default COMPAREPAGE;
