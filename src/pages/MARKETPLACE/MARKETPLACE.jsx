import React from 'react';
import MARKETPLACELEFT from '../../components/MARKETPLACE_LEFT/MARKETPLACE_LEFT';
import MARKETPLACERIGHT from '../../components/MARKETPLACE_RIGHT/MARKETPLACE_RIGHT';

import item1 from './../../assets/images/item1.jpg';
import item2 from './../../assets/images/item2.png';
import item3 from './../../assets/images/item3.png';
import item4 from './../../assets/images/item4.png';
import item5 from './../../assets/images/item5.jpg';
import item6 from './../../assets/images/item6.jpg';
import item7 from './../../assets/images/item7.jpg';
import item8 from './../../assets/images/item8.png';
import item9 from './../../assets/images/item9.jpg';
import item10 from './../../assets/images/item10.jpg';

const MARKETPLACE = () => {

    const items = [
        {
            img : item1,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item2,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item3,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item4,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item5,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item6,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item7,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item8,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item9,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        },
        {
            img : item10,
            mainPrice : 17000,
            offPrice : 15,
            name : "SONY 75” X8000H-4K Ultra HD HDR Smart Android LED TV"
        }
    ]

    return (
        <div className='marketplace'>
            <MARKETPLACELEFT />
            <MARKETPLACERIGHT items={items} />
        </div>
    );
}

export default MARKETPLACE;