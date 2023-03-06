import React from 'react';
import PRODUCTCARD from '../PRODUCT_CARD/PRODUCT_CARD';

const GRIDVIEW = (props) => {
    return (
        <>
            {
                props.products.slice(0,12).map((item, index) => {
                    return(
                        <div key={index} className="marketplace-product">
                            <PRODUCTCARD item={item} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default GRIDVIEW;
