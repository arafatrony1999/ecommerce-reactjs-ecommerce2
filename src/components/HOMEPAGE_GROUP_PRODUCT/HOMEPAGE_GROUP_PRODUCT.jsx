import React, { useEffect, useState } from 'react';
import GROUPLEFT from './GROUP_LEFT/GROUP_LEFT';
import GROUPRIGHT from './GROUP_RIGHT/GROUP_RIGHT';

const HOMEPAGEGROUPPRODUCT = (props) => {
    const [featured, setFeatured] = useState(null)

    const propData = async () => {
        const formData = new FormData()
        props.products && formData.append('id', props.products.id)
        await fetch("http://127.0.0.1:8000/api/getCatagoriesProducts", {
            method: "POST",
            body: formData
        })
        .then((res) => {
            if (!res.ok) {
                throw Error("Something went wrong!")
            }
            else {
                return res.json()
            }
        })
        .then((data) => {
            setFeatured(data)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        propData();
        //eslint-disable-next-line
    }, [props]);

    return (
        <div className='homepage-group-product'>
            <GROUPLEFT styles={props.styles} products={props.products && props.products} />
            <GROUPRIGHT featured={featured && featured} />
        </div>
    );
}

export default HOMEPAGEGROUPPRODUCT;
