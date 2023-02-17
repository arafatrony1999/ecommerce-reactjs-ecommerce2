import React from 'react';
import { Link } from 'react-router-dom';

const MAINCATAGORIESALL = (props) => {
    return (
        <div className="main-catagories-all">
            <div className="main-catagory-top">
                <span>Main Catagory</span>
                <a href="/">See all</a>
            </div>
            <div className="catagories">
                <ul>
                    {
                        props.catagories && props.catagories.map((data) => {
                            return(
                                <li key={data.id}>
                                    <Link to="/catagories">
                                        <span>
                                            <img src={data.cat_image} alt="" />
                                        </span>
                                        <span>{data.cat_name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default MAINCATAGORIESALL;
