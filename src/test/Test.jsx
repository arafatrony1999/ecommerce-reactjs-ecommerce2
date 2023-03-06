import React from 'react';
import { useProductContext } from '../context/productContext';

const Test = () => {
    const { isLoading, products } = useProductContext();
    if(isLoading){
        return <h1>Fuck</h1>
    }
    return (
        <div>
            {
                products.map((product, index) => {
                    return(
                        <h1 key={index}>{product.name} <br /> </h1>
                    )
                })
            }
        </div>
    );
}

export default Test;
