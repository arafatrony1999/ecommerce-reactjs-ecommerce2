import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/filterReducer';
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
    filterProduct: [],
    myProducts: [],
    gridView: true,
    set_sort: "all",
    filters: {
        search: "",
        userCatagory: "All",
        priceRange: 0,
    }
}

const FilterProvider = ( {children} ) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }

    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"})
    }

    const setSortItem = (e) => {
        return dispatch({type: "SET_SORT_TYPE", payload: e.target.value})
    }

    const setSortByCatagory = (data) => {
        return dispatch({type: "SET_USER_CATAGORY_INPUT", payload: data})
    }

    const handleSearchFilter = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "SET_USER_SEARCH_INPUT", payload:{name, value} })
    }

    const setPriceRange = (userPriceRange) => {
        return dispatch({type: "SET_PRICE_RANGE", payload: userPriceRange})
    }

    useEffect(() => {
        dispatch({type: "SET_SORT_PRODUCT", payload: products})
    }, [state.set_sort, products])

    useEffect(() => {
        dispatch({type: "DISPLAY_FILTER_PRODUCT"})
    }, [state.filters])

    useEffect(() => {
        dispatch({type: "MY_API_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return(
        <FilterContext.Provider value={{...state, setGridView, setListView, setSortItem, handleSearchFilter, setSortByCatagory, setPriceRange}}>
            { children }
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterProvider, FilterContext, useFilterContext }