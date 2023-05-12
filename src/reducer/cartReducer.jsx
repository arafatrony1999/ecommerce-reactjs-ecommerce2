const CartReducer = (state, action) => {

    if(action.type === "SET_NO_USER"){
        return{
            ...state,
            noUser: false
        }
    }

    if(action.type === "NO_USER"){
        return{
            ...state,
            noUser: true
        }
    }

    if(action.type==="ADD_TO_CART"){
        const { qty, product } = action.payload;

        Object.assign(product, {quantity: qty})

        return{
            ...state,
            setCartItem: product,
            addSuccess: false
        }
    }
    
    if(action.type==="REMOVE_FROM_CART"){
        const { qty, product } = action.payload;

        Object.assign(product, {quantity: qty})

        return{
            ...state,
            unsetCartItem: product,
            removeSuccess: false
        }
    }

    if(action.type === "ADD_TO_CART_SUCCESSFUL"){
        return{
            ...state,
            setCartItem: {},
            addSuccess: true,
            removeSuccess: false
        }
    }

    if(action.type === "REMOVE_FROM_CART_SUCCESSFUL"){
        return{
            ...state,
            unsetCartItem: {},
            addSuccess: false,
            removeSuccess: true
        }
    }

    if(action.type === "MY_API_DATA"){
        let { carts, products } = action.payload;
        
        if(carts.length !== 0 && products.length !== 0){
            let cartList = [];
            cartList = products.filter(e1 => {
                return carts.find(element => {
                    return e1.id === element.products.id
                })
            })
            let merged = carts.map(function(value, index){
                var newValue = value;
                newValue.product_details = cartList[index]
                return newValue;
            });

            let multiply = merged.map((a) => {
                return(
                    a.product_details.offers !== 0 ? 
                    (a.products.price - a.products.price * (a.product_details.discount.discount_percent)/100) * a.quantity :
                    (a.products.price * a.quantity)
                )
            });
            let sum = multiply.reduce((a, b) => a + b, 0)

            return{
                ...state,
                cart: merged,
                total_item: action.payload.carts.length,
                sub_total: sum,
            }
        }else{
            return{
                ...state,
                cart: [],
                total_item: 0,
                sub_total: 0
            }
        }
    }

    if(action.type === 'SEND_MONEY_INFO'){
        const { txn, senderNumber } = action.payload;
        return{
            ...state,
            txn: txn,
            senderNumber: senderNumber
        }
    }

    if(action.type === 'ORDER_PLACE_UNSET'){
        return{
            ...state,
            orderProcess: true,
            orderPlaceSuccess: false
        }
    }

    if(action.type === 'ORDER_PLACE_SUCCESSFUL'){
        return{
            ...state,
            orderPlaceSuccess: true,
            orderProcess: false,
            cart: [],
            total_item: 0,
            sub_total: 0,
        }
    }

    if(action.type === 'ORDER_SERVER_NOT_RESPONDING'){
        return{
            ...state,
            orderPlaceSuccess: false,
            orderProcess: false
        }
    }

    return state;
}

export default CartReducer;