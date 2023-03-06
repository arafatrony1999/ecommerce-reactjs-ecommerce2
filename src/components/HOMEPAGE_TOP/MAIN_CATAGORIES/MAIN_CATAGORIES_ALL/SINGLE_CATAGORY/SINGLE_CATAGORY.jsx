import React from 'react';
import { useFilterContext } from "../../../../../context/FilterContext";

const SINGLECATAGORY = (props) => {
    const { setSortByCatagory, filters:{userCatagory} } = useFilterContext();
    return (
        <>
            <li>
                <button className={userCatagory === props.catagories.cat_name ? "active" : ""} onClick={(e) => setSortByCatagory(props.catagories.cat_name)}>
                    <span>
                        <img src={props.catagories.cat_image} alt="" />
                    </span>
                    <span>{props.catagories.cat_name}</span>
                </button>
            </li>
        </>
    );
}

export default SINGLECATAGORY;
