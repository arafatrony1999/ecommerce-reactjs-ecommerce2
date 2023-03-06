import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/catagoryReducer';
import axios from 'axios';

const CatagoryContext = createContext();

const initialState = {
    isCatagoryLoading: false,
    isError: false,
    catagories: [],
    featuredCatagory: []
};

const API = "http://127.0.0.1:8000/api/getCatagories";

const CatagoryProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    
    const getCatagories = async (url) => {
        dispatch({ type: "SET_LOADING"});

        try{
            const res = await axios.get(url);
            const catagories = await res.data;
    
            dispatch({type: "MY_API_DATA", payload: catagories});
            dispatch({type: "MY_API_FEATURED_DATA", payload: catagories});
        }
        catch(error){
            dispatch({type: "API_ERROR"});
        }

    }

    useEffect(() => {
        getCatagories(API)
    }, []);

    return (
        <CatagoryContext.Provider value={ {...state} }>
            {children}
        </CatagoryContext.Provider>
    );
}

const useCatagoryContext = () => {
    return useContext(CatagoryContext);
}

export {CatagoryProvider, CatagoryContext, useCatagoryContext}