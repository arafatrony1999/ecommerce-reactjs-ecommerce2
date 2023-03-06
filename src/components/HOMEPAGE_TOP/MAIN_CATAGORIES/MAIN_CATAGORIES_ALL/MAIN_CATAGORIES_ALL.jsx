import React from 'react';
import { Link } from 'react-router-dom';
import { useCatagoryContext } from '../../../../context/CatagoryContext';
import SINGLECATAGORY from './SINGLE_CATAGORY/SINGLE_CATAGORY';
import { useFilterContext } from '../../../../context/FilterContext';

const MAINCATAGORIESALL = () => {
    const { isLoading, catagories } = useCatagoryContext();
    const { setSortByCatagory, filters:{userCatagory} } = useFilterContext()
    if(isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="main-catagories-all">
            <div className="main-catagory-top">
                <span>Main Catagory</span>
                <Link href="/">See all</Link>
            </div>
            <div className="catagories">
                <ul>
                    <li>
                        <button className={userCatagory === "All" ? "active" : ""} onClick={(e) => setSortByCatagory("All")}>
                            <span>All Catagories</span>
                        </button>
                    </li>
                    {
                        catagories.map((data) => {
                            return(
                                <SINGLECATAGORY key={data.id} catagories={data} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default MAINCATAGORIESALL;
