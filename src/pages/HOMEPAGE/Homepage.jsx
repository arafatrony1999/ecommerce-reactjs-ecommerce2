import React, { useEffect, useState } from 'react';
import HOMEPAGECONTACT from '../../components/HOMEPAGE_CONTACT/HOMEPAGE_CONTACT';
import HOMEPAGETOP from '../../components/HOMEPAGE_TOP/HOMEPAGE_TOP';
import HOMEPAGEGROUPPRODUCT from '../../components/HOMEPAGE_GROUP_PRODUCT/HOMEPAGE_GROUP_PRODUCT';
import HOMEPAGEPRODUCTS from '../../components/HOMEPAGE_PRODUCTS/HOMEPAGE_PRODUCTS';

import featured1 from '../../assets/images/featured1.jpg';
import featured2 from '../../assets/images/featured2.jpg';
import featured3 from '../../assets/images/featured3.jpg';
import featured4 from '../../assets/images/featured4.jpg';
import featured5 from '../../assets/images/featured5.jpg';
import placeholder from '../../assets/images/placeholder.jpg';


const Homepage = () => {
    const [catagory, setCatagory] = useState(null)
    const [products, setProducts] = useState(null)

    const getCatagory = async () => {
        await fetch("http://127.0.0.1:8000/api/getCatagories")
        .then((res) => {
            if (!res.ok) {
                throw Error("Something went wrong!")
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            setCatagory(data)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    const getProducts = async () => {
        await fetch("http://127.0.0.1:8000/api/getProduct")
        .then((res) => {
            if (!res.ok) {
                throw Error("Something went wrong!")
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        getCatagory();
        getProducts();
    }, []);


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



    return (
        <div style={{width: "100%", overflow: "hidden"}}>

            <HOMEPAGETOP />
            <HOMEPAGECONTACT />

            <HOMEPAGEGROUPPRODUCT styles="1st" featured={featured} products={catagory && catagory[0]} />
            <HOMEPAGEGROUPPRODUCT styles="2nd" featured={featured} products={catagory && catagory[1]} />
            <HOMEPAGEGROUPPRODUCT styles="3rd" featured={featured} products={catagory && catagory[2]} />
          
            <HOMEPAGEPRODUCTS items={products} />
            <HOMEPAGEPRODUCTS items={products} />
            <HOMEPAGEPRODUCTS items={products} />
            
        </div>
    );
}

export default Homepage;
