import React, { useEffect } from 'react';

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
import HEADERHIDE from '../components/HEADER_HIDE/HEADER_HIDE';
import { toast, ToastContainer } from 'react-toastify';
import { useCartContext } from '../context/CartContext';
import PROFILELAYOUT from '../components/PROFILE_LAYOUT/PROFILE_LAYOUT';
import PROFILERIGHT from '../components/PROFILE_RIGHT/PROFILE_RIGHT';
import CARTPAGERIGHT from '../components/CART_PAGE_RIGHT/CART_PAGE_RIGHT';
import { useCompareContext } from '../context/CompareContext';
import COMPAREPAGE from '../pages/COMPARE_PAGE/COMPARE_PAGE';
import EDITPROFILE from '../pages/EDIT_PROFILE/EDIT_PROFILE';
import { useUserContext } from '../context/UserContext';
import RESETPASSWORD from '../pages/RESET_PASSWORD/RESET_PASSWORD';


const Index = () => {

    const { addSuccess, removeSuccess, noUser } = useCartContext();
    const { addCompareSuccess, removeCompareSuccess, existMsg, noCompareUser } = useCompareContext();
    const { userUpdateSuccessfull, userUpdateFailed } = useUserContext();
    
    useEffect(() => {
        if(addSuccess){
            toast.success("Item added to cart successfully!", {
                // toastId: 'success1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        if(removeSuccess){
            toast.success("Item Removed from cart successfully!", {
                // toastId: 'success1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }, [addSuccess, removeSuccess]);


    useEffect(() => {
        if(userUpdateFailed){
            toast.warn("You didn't update anything!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }

        if(userUpdateSuccessfull){
            toast.success("Your data has been updated!", {
                toastId: 'success1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    })


    useEffect(() => {
        if(noUser){
            toast.warn("You need to login first", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }, [noUser])

    
    useEffect(() => {
        if(noCompareUser){
            toast.warn("You need to login first", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }, [noCompareUser])

    
    useEffect(() => {
        if(addCompareSuccess){
            toast.success("Item added to compare list successfully!", {
                // toastId: 'success1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        if(removeCompareSuccess){
            toast.success("Item Removed from compare list successfully!", {
                // toastId: 'success1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        if(existMsg){
            toast.warn("Item already exist in your compare list", {
                // toastId: 'warn1',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }, [addCompareSuccess, removeCompareSuccess, existMsg]);


    return (
        <BrowserRouter>

            <SCROLLTOTOP />
            <ToastContainer />
            
            <HEADER />
            <HEADERHIDE />


            <Routes>
                <Route path='/' element={<HOMEPAGE />} />
                <Route path='/marketplace' element={<MARKETPLACE />} />
                <Route path='/rfq' element={<RFQ />} />
                <Route path='/product/product_id=:id' element={<PRODUCTPAGE />} />
                <Route path='/regestration' element={<REGESTRATIONPAGE />} />
                <Route path='/login' element={<LOGINPAGE /> } />
                <Route path='/wishlist' element={<PRODUCTPAGE />} />
                <Route path='/orders' element={<PRODUCTPAGE />} />
                <Route path='/transection' element={<PRODUCTPAGE />} />
                <Route path='/compare' element={<PRODUCTPAGE />} />

                
                <Route path='/user' element={<PROFILELAYOUT />} >
                    <Route path='dashboard' element={<PROFILERIGHT />} ></Route>
                    <Route path='cart' element={<CARTPAGERIGHT />} ></Route>
                    <Route path='compare-list' element={<COMPAREPAGE />} ></Route>
                    <Route path='profile' element={<EDITPROFILE  />} ></Route>
                    <Route path='profile/reset-password' element={<RESETPASSWORD  />} ></Route>
                </Route>
            </Routes>

            <FOOTER />

            <MOBILENAV />


        </BrowserRouter>
    );
}

export default Index;