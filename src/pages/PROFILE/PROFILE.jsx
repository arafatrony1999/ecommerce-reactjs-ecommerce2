import React from 'react';
import PROFILELEFT from '../../components/PROFILE_LEFT/PROFILE_LEFT';
import PROFILERIGHT from '../../components/PROFILE_RIGHT/PROFILE_RIGHT';

const PROFILE = () => {
    return (
        <div className='profile-page'>
            <PROFILELEFT />
            <PROFILERIGHT />
        </div>
    );
}

export default PROFILE;
