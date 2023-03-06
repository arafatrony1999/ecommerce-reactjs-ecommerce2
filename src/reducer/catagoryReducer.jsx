const CatagoryReducer = (state, action) => {
    if(action.type==="SET_LOADING"){
        return{
            ...state,
            isLoading: true
        }
    }
    if(action.type==="MY_API_DATA"){
        return{
            ...state,
            isLoading: false,
            catagories: action.payload
        }
    }
    if(action.type==="MY_API_FEATURED_DATA"){
        return{
            ...state,
            isLoading: false,
            featuredCatagory: action.payload.filter((e) => {
                return e.featured===1
            })
        }
    }
    if(action.type==="API_ERROR"){
        return{
            ...state,
            isLoading: false,
            isError: true
        }
    }
    return ( state );
}

export default CatagoryReducer;
