import React from 'react';
import GROUPLEFT from './GROUP_LEFT/GROUP_LEFT';
import GROUPRIGHT from './GROUP_RIGHT/GROUP_RIGHT';

const HOMEPAGEGROUPPRODUCT = (props) => {
    return (
        <div className='homepage-group-product'>
            <GROUPLEFT styles={props.styles} products={props.products} />
            <GROUPRIGHT featured={props.featured} />
        </div>
    );
}

export default HOMEPAGEGROUPPRODUCT;
