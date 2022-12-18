import React from 'react';
import MAINCATAGORIES from './MAIN_CATAGORIES/MAIN_CATAGORIES';
import HOMEPAGECAROUSEL from './HOMEPAGE_CAROUSEL/HOMEPAGE_CAROUSEL';
import TODAYSDEAL from './TODAYS_DEAL/TODAYS_DEAL';
import BOTTOM from './BOTTOM/BOTTOM';

const HOMEPAGETOP = () => {
    return (
        <>
            <div className='homepage-top'>
                <MAINCATAGORIES />
                <HOMEPAGECAROUSEL />
                <TODAYSDEAL />
            </div>
            <BOTTOM />
        </>
    );
}

export default HOMEPAGETOP;
