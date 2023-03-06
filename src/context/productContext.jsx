import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer';
import axios from 'axios';

const ProductContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    newProducts: [],
    bestSellingProducts: []
};

const API = "http://127.0.0.1:8000/api/getProduct";

const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING"});

        try{
            const res = await axios.get(url);
            const products = await res.data;
    
            dispatch({type: "MY_API_DATA", payload: products});
        }
        catch(error){
            dispatch({type: "API_ERROR"});
        }

    }

    useEffect(() => {
        getProducts(API)
    }, []);

    return (
        <ProductContext.Provider value={ {...state} }>
            {children}
        </ProductContext.Provider>
    );
}

const useProductContext = () => {
    return useContext(ProductContext);
}

export {ProductProvider, ProductContext, useProductContext}