const orderReducer = (state, action) => {
    if(action.type === 'ALL_ORDERS'){
        return{
            ...state,
            orders: action.payload
        }
    }

    return state;
}

export default orderReducer;