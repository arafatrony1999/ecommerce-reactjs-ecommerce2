import React, { useEffect, useState } from 'react';

import { userContext } from '../customHooks/userContext';

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

    const [user, setUser] = useState(null);


    useEffect(()=>{
        const localAuth = localStorage.getItem("auth");
        const userAuth = JSON.parse(localAuth);

        if(userAuth !== null){
            const formData = new FormData();
            formData.append('auth', userAuth.auth)
    
    
            fetch("http://127.0.0.1:8000/api/getUser",{
                method: "POST",
                body: formData
            })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Something went wrong! Please check your internet connection and try again.")
                }
                else {
                    return res.json();
                }
            })
            .then((data) => {
                setUser(data[0])
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
        else{
            console.log("null");
        }
    },[]);

    return (
        <userContext.Provider value={user}>
            <BrowserRouter>

                <SCROLLTOTOP />
                
                <HEADER />

                <Routes>
                    <Route path='/' element={<HOMEPAGE />} />
                    <Route path='/marketplace' element={<MARKETPLACE />} />
                    <Route path='/rfq' element={<RFQ />} />
                    <Route path='/regestration' element={<REGESTRATIONPAGE />} />
                    <Route path='/product' element={<PRODUCTPAGE />} />
                    <Route path='/login' element={<LOGINPAGE />} />
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
        </userContext.Provider>
    );
}

export default Index;