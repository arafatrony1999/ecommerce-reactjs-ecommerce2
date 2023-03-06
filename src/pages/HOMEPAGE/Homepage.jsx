// import React, { useEffect, useState } from 'react';
import HOMEPAGECONTACT from '../../components/HOMEPAGE_CONTACT/HOMEPAGE_CONTACT';
import HOMEPAGETOP from '../../components/HOMEPAGE_TOP/HOMEPAGE_TOP';
import HOMEPAGEGROUPPRODUCT from '../../components/HOMEPAGE_GROUP_PRODUCT/HOMEPAGE_GROUP_PRODUCT';
import HOMEPAGEPRODUCTS from '../../components/HOMEPAGE_PRODUCTS/HOMEPAGE_PRODUCTS';
import { useCatagoryContext } from '../../context/CatagoryContext';
import { useProductContext } from '../../context/productContext';

const Homepage = () => {

    const {isLoading, featuredCatagory} = useCatagoryContext();
    const { featuredProducts, newProducts, bestSellingProducts } = useProductContext();

    let catSections = <></>;
    if(featuredCatagory.length===1){
        catSections=<>
            <HOMEPAGEGROUPPRODUCT styles="1st" featured={featuredCatagory[0]} />
        </>
    }
    if(featuredCatagory.length===2){
        catSections=<>
            <HOMEPAGEGROUPPRODUCT styles="1st" featured={featuredCatagory[0]} />
            <HOMEPAGEGROUPPRODUCT styles="2nd" featured={featuredCatagory[1]} />
        </>
    }
    if(featuredCatagory.length===3){
        catSections=<>
            <HOMEPAGEGROUPPRODUCT styles="1st" featured={featuredCatagory[0]} />
            <HOMEPAGEGROUPPRODUCT styles="2nd" featured={featuredCatagory[1]} />
            <HOMEPAGEGROUPPRODUCT styles="3rd" featured={featuredCatagory[2]} />
        </>
    }

    if(isLoading===true){
        return <h1>Homepage Group loading...</h1>
    }


    return (
        <div style={{width: "100%", overflow: "hidden"}}>

            <HOMEPAGETOP />
            <HOMEPAGECONTACT />

            { catSections }
          
            <HOMEPAGEPRODUCTS title="Featured Products" items={featuredProducts} />
            <HOMEPAGEPRODUCTS title="Best Selling Products" items={bestSellingProducts} />
            <HOMEPAGEPRODUCTS title="New Products" items={newProducts} />
            
        </div>
    );
}

export default Homepage;
