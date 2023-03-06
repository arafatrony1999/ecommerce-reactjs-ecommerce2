const FilterReducer = (state, action) => {
    if(action.type === "MY_API_FILTER_PRODUCTS"){
        return{
            ...state,
            isFilterLoading: false,
            filterProduct: [...action.payload],
            myProducts: [...action.payload]
        }
    }

    if(action.type === "SET_GRID_VIEW"){
        return{
            ...state,
            gridView: true
        }
    }

    if(action.type === "SET_LIST_VIEW"){
        return{
            ...state,
            gridView: false
        }
    }

    if(action.type === "SET_SORT_TYPE"){
        return{
            ...state,
            set_sort: action.payload
        }
    }

    if(action.type === "SET_SORT_PRODUCT"){
        let newSortData;
        let tempSortProduct = [...action.payload]

        if(state.set_sort === "all"){
            newSortData = tempSortProduct
        }

        if(state.set_sort === "old"){
            newSortData = tempSortProduct.sort((a,b) => {
                return a.id - b.id
            })
        }
        if(state.set_sort === "new"){
            newSortData = tempSortProduct.sort((a,b) => {
                return b.id - a.id
            })
        }
        if(state.set_sort === "low"){
            const sortingProductsByPrice = (a, b) => {
                return a.price - b.price
            }
            newSortData = tempSortProduct.sort(sortingProductsByPrice)
        }
        if(state.set_sort === "high"){
            const sortingProductsByPrice = (a, b) => {
                return b.price - a.price
            }
            newSortData = tempSortProduct.sort(sortingProductsByPrice)
        }
        if(state.set_sort === "a-z"){
            newSortData = tempSortProduct.sort((a,b) => a.name.localeCompare(b.name))
        }
        if(state.set_sort === "z-a"){
            newSortData = tempSortProduct.sort((a,b) => b.name.localeCompare(a.name))
        }

        return{
            ...state,
            filterProduct: newSortData
        }
    }

    if(action.type === "SET_USER_SEARCH_INPUT"){
        const {name, value} = action.payload;
        return{
            ...state,
            filters:{
                ...state.filters,
                [name]: value,
            }

        }
    }

    if(action.type === "SET_USER_CATAGORY_INPUT"){
        const name = action.payload;
        return{
            ...state,
            filters:{
                ...state.filters,
                userCatagory: name,
            }
        }
    }

    if(action.type==="SET_PRICE_RANGE"){
        const price = action.payload
        return{
            ...state,
            filters:{
                ...state.filters,
                priceRange: price
            }
        }
    }

    if(action.type === "DISPLAY_FILTER_PRODUCT"){
        let { myProducts } = state;
        let tempFilterProducts = [...myProducts]

        const { search } = state.filters;
        const { userCatagory } = state.filters;
        const { priceRange } = state.filters;

        if( userCatagory ){
            if(userCatagory === "All"){
                tempFilterProducts = myProducts;
            }else{
                tempFilterProducts = tempFilterProducts.filter((currentElement) => {
                    return currentElement.catagory.cat_name === userCatagory;
                });
            }
        }

        if( priceRange ){
            if(priceRange === 0 || priceRange === "0"){
                tempFilterProducts = myProducts;
            }else{
                tempFilterProducts = tempFilterProducts.filter((currentElement) => {
                    return currentElement.price <= priceRange;
                });
            }
        }

        
        if( search ){
            tempFilterProducts = tempFilterProducts.filter((currentElement) => {
                return currentElement.name.toLowerCase().includes(search);
            });
        }
        
        return{
            ...state,
            filterProduct: tempFilterProducts,
        }
    }
}

export default FilterReducer;