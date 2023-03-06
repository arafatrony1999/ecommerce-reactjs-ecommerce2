import React from 'react';
import PRODUCTCARDLIST from '../PRODUCT_CARD_LIST/PRODUCT_CARD_LIST';

const LISTVIEW = (props) => {
    return (
        <>
            {
                props.products.slice(0,12).map((item, index) => {
                    return(
                        <div key={index} className="marketplace-product-list">
                            <PRODUCTCARDLIST item={item} />
                        </div>
                    )
                })
            }
        </>
    );
}

export default LISTVIEW;
