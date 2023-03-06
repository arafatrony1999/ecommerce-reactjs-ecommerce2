import React from 'react';
import EDITPROFILECONTAINER from '../../components/EDIT_PROFILE_CONTAINER/EDIT_PROFILE_CONTAINER';
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD';

const EDITPROFILE = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="User Profile" />

            <div className="container-after-beard">
                <EDITPROFILECONTAINER />
            </div>
        </div>
    );
}

export default EDITPROFILE;
