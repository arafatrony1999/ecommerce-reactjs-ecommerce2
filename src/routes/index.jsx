import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HOMEPAGE from './../pages/HOMEPAGE/Homepage';
import MARKETPLACE from '../pages/MARKETPLACE/MARKETPLACE';
import HEADER from '../layouts/HEADER/HEADER';
import FOOTER from '../layouts/FOOTER/FOOTER';
import RFQ from '../pages/RFQ/RFQ';
import LOGINPAGE from '../pages/LOGIN_PAGE/LOGIN_PAGE';
import MOBILENAV from '../layouts/MOBILE-NAV/MOBILE-NAV';
import REGESTRATIONPAGE from '../pages/REGESTRATION_PAGE/REGESTRATION_PAGE';
import PRODUCTPAGE from '../pages/PRODUCT_PAGE/PRODUCT_PAGE';
import SCROLLTOTOP from '../components/SCROLL_TO_TOP/SCROLL_TO_TOP';
import PROFILE from '../pages/PROFILE/PROFILE';


const Index = () => {
    return (
        <>
            <BrowserRouter>

                <SCROLLTOTOP />
                
                <HEADER />

                <Routes>
                    <Route path='/' element={<HOMEPAGE />} />
                    <Route path='/marketplace' element={<MARKETPLACE />} />
                    <Route path='/rfq' element={<RFQ />} />
                    <Route path='/login' element={<LOGINPAGE />} />
                    <Route path='/regestration' element={<REGESTRATIONPAGE />} />
                    <Route path='/product' element={<PRODUCTPAGE />} />
                    <Route path='/profile' element={ <PROFILE /> } />
                    <Route path='/cart' element={<PRODUCTPAGE />} />
                    <Route path='/wishlist' element={<PRODUCTPAGE />} />
                    <Route path='/orders' element={<PRODUCTPAGE />} />
                    <Route path='/transection' element={<PRODUCTPAGE />} />
                    <Route path='/compare' element={<PRODUCTPAGE />} />
                </Routes>

                <FOOTER />

                <MOBILENAV />
            </BrowserRouter>
        </>
    );
}

export default Index;