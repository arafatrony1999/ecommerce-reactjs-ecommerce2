import React from 'react';
import PROFILEBREAD from '../../components/PROFILE_BREAD/PROFILE_BREAD';
import RESETPASSWORDCONTAINER from '../../components/RESET_PASSWORD_CONTAINER/RESET_PASSWORD_CONTAINER';

const RESETPASSWORD = () => {
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="Password Reset" />

            <div className="password-reset-section">
                <RESETPASSWORDCONTAINER />
            </div>
        </div>
    );
}

export default RESETPASSWORD;
