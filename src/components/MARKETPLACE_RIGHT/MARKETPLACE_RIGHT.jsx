import React from 'react';
import PRODUCTCARD from '../PRODUCT_CARD/PRODUCT_CARD';
import FORM from './FORM/FORM';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsFunnel } from "react-icons/bs";



const MARKETPLACERIGHT = (props) => {

    const handleSideBar = () => {
        document.querySelector('.marketplace-left').classList.add('marketplace-left-auto')
    }

    return (
        <div className='marketplace-right'>
            
            <div className="marketplace-right-top">
                Home / <span> "All categories"</span>
            </div>

            <div className="marketplace-right-middle">
                <div className="marketplace-middle-left">
                    <span>All products</span>
                    <span onClick={handleSideBar} className='filter-btn'>
                        <BsFunnel />
                    </span>
                </div>
                <div className="marketplace-middle-right">
                    <FORM />
                    <FORM />
                </div>
            </div>

            <div className="marketplace-right-bottom">
                <div className="marketplace-products">
                    {
                        props.items.map((item, index)=>{
                            return(
                                <div key={index} className="marketplace-product">
                                    <PRODUCTCARD item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="marketplace-pagination">
                <Stack spacing={2}>
                    <Pagination count={565} variant="outlined" color="primary" />
                </Stack>
            </div>

        </div>
    );
}

export default MARKETPLACERIGHT;
