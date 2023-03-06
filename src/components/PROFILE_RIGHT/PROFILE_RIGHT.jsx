import React from 'react';
import PROFILEBREAD from '../PROFILE_BREAD/PROFILE_BREAD';

const PROFILERIGHT = () => {
    
    return (
        <div className='profile-right'>
            <PROFILEBREAD pageTitle="User Dashboard" />
            <div className="profile-cards">
                <div className="profile-card"></div>
                <div className="profile-card"></div>
                <div className="profile-card"></div>
            </div>
        </div>
    );
}

export default PROFILERIGHT;
