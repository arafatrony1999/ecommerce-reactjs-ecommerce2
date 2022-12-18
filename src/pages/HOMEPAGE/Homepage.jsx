import React from 'react';
import HOMEPAGECONTACT from '../../components/HOMEPAGE_CONTACT/HOMEPAGE_CONTACT';
import HOMEPAGETOP from '../../components/HOMEPAGE_TOP/HOMEPAGE_TOP';
import HOMEPAGEGROUPPRODUCT from '../../components/HOMEPAGE_GROUP_PRODUCT/HOMEPAGE_GROUP_PRODUCT';
import HOMEPAGEPRODUCTS from '../../components/HOMEPAGE_PRODUCTS/HOMEPAGE_PRODUCTS';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';
import product5 from '../../assets/images/product5.png';
import product6 from '../../assets/images/product6.png';
import product7 from '../../assets/images/product7.png';
import product8 from '../../assets/images/product8.png';


import featured1 from '../../assets/images/featured1.jpg';
import featured2 from '../../assets/images/featured2.jpg';
import featured3 from '../../assets/images/featured3.jpg';
import featured4 from '../../assets/images/featured4.jpg';
import featured5 from '../../assets/images/featured5.jpg';
import placeholder from '../../assets/images/placeholder.jpg';


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

const Homepage = () => {
    const products = [
        {
            title: "Germents Accecories",
            img: product3
        },
        {
            title: "Germents Accecories",
            img: product4
        },
        {
            title: "Germents Accecories",
            img: product5
        },
        {
            title: "Germents Accecories",
            img: product6
        },
        {
            title: "Germents Accecories",
            img: product7
        },
        {
            title: "Germents Accecories",
            img: product8
        }
    ];

    const featured = [
        {
            img: featured1,
            price: "$ 199.0"
        },
        {
            img: featured2,
            price: "$ 199.0"
        },
        {
            img: featured3,
            price: "$ 199.0"
        },
        {
            img: featured4,
            price: "$ 199.0"
        },
        {
            img: featured5,
            price: "$ 199.0"
        },
        {
            img: placeholder,
            price: "$ 199.0"
        },
    ];

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
        <div style={{width: "100%", overflow: "hidden"}}>

            <HOMEPAGETOP />
            <HOMEPAGECONTACT />

            <HOMEPAGEGROUPPRODUCT styles="1st" featured={featured} products={products} />
            <HOMEPAGEGROUPPRODUCT styles="2nd" featured={featured} products={products} />
            <HOMEPAGEGROUPPRODUCT styles="3rd" featured={featured} products={products} />

            <HOMEPAGEPRODUCTS items={items} />
            <HOMEPAGEPRODUCTS items={items} />
            <HOMEPAGEPRODUCTS items={items} />
            
        </div>
    );
}

export default Homepage;
