const ProductReducer = (state, action) => {
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
            featuredProducts: action.payload.filter((e) => {
                return e.featured === 1
            }).slice(0,10),
            newProducts: action.payload.sort((e) => {
                return e.created_at
            }).slice(0,10),
            bestSellingProducts: action.payload.filter((e) => {
                return e.inventory !== null
            }).sort((e) => {
                return e.inventory.total_sale
            }).slice(0,10),
            products: action.payload
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

export default ProductReducer;
