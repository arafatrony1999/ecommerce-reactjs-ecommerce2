import React from 'react';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
const GROUPLEFT = (props) => {
    var stylesLeft = "";
    var linkLeft = "";
    var stylesRight = "";
    if(props.styles === "1st"){
        stylesLeft = "first-left";
        linkLeft = "first-link";
        stylesRight = "first-right"
    }else if(props.styles === "2nd"){
        stylesLeft = "secound-left";
        linkLeft = "secound-link";
        stylesRight = "secound-right"
    }else{
        stylesLeft = "third-left";
        linkLeft = "third-link";
        stylesRight = "third-right"
    }

    return (
        <div className='group-left'>
            <div className="group-left-left" id={stylesLeft}>
                <h3>{props.products && props.products.cat_name}</h3>
                <a id={linkLeft} href='/'>View All</a>
            </div>
            <div className="group-left-right" id={stylesRight}>
                <div className="group-right-title">
                    <div className="group-main-title">Sub-Categories</div>
                    <div className="group-main-link">
                        <a href="/">View All <BsChevronRight /></a>
                    </div>
                </div>

                <div className="group-left-products">
                    {
                        props.products && props.products.subcatagory.slice(0,6).map((product) => {
                            return(
                                <Link key={product.id} to='/product' className="group-left-product">
                                    <div className="left-product-image">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="left-product-title">
                                        {product.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default GROUPLEFT;
