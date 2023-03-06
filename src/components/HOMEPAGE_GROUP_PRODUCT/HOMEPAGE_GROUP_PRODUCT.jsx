import React from 'react';
import GROUPLEFT from './GROUP_LEFT/GROUP_LEFT';
import GROUPRIGHT from './GROUP_RIGHT/GROUP_RIGHT';

const HOMEPAGEGROUPPRODUCT = (props) => {
    return (
        <div className='homepage-group-product'>
            <GROUPLEFT styles={props.styles} subcatagory={props.featured && props.featured} />
            <GROUPRIGHT products={props.featured && props.featured.product} />
        </div>
    );
}

export default HOMEPAGEGROUPPRODUCT;
