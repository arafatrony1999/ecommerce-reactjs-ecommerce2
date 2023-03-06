import React from 'react';
import FORM from './FORM/FORM';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsFunnel, BsFillGridFill, BsListTask } from "react-icons/bs";
import ALLPRODUCTS from '../ALL_PRODUCTS/ALL_PRODUCTS';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../context/FilterContext';



const MARKETPLACERIGHT = () => {

    const handleSideBar = () => {
        document.querySelector('.marketplace-left').classList.add('marketplace-left-auto')
    }

    const { gridView, setGridView, setListView, filters:{search, userCatagory}, handleSearchFilter } = useFilterContext();

    return (
        <div className='marketplace-right'>
            
            <div className="marketplace-right-top">
                <Link to="/">Home</Link> / <span> {`${userCatagory}`}</span>
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
                </div>
            </div>

            <div className="marketplace-right-middle-2 my-2">
                
                <div className="grid-list-search">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="search" value={search} placeholder='Search Product...' onChange={handleSearchFilter} />
                    </form>
                </div>

                <div className="grid-list-btn">
                    <button onClick={setGridView} className={gridView ? 'grid-btn active' : 'grid-btn'}>
                        <BsFillGridFill />
                    </button>
                    <button onClick={setListView} className={gridView ? 'list-btn' : 'list-btn active'}>
                        <BsListTask />
                    </button>
                </div>
            </div>

            <div className="marketplace-right-bottom">
                <div className="marketplace-products">
                    <ALLPRODUCTS />
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
