const CartReducer = (state, action) => {

    if(action.type==="ADD_TO_CART"){
        const { qty, product } = action.payload;

        Object.assign(product, {quantity: qty})

        return{
            ...state,
            setCartItem: product,
            addSuccess: false
        }
    }

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
    
    if(action.type==="REMOVE_FROM_CART"){
        const { qty, product } = action.payload;

        Object.assign(product, {quantity: qty})

        return{
            ...state,
            unsetCartItem: product,
            removeSuccess: false
        }
    }

    if(action.type === "ADD_TO_CART_SUCCESSFULL"){
        return{
            ...state,
            setCartItem: {},
            addSuccess: true,
            removeSuccess: false

        }
    }

    if(action.type === "REMOVE_FROM_CART_SUCCESSFULL"){
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
            let marged = carts.map(function(value, index){
                var newValue = value;
                newValue.product_details = cartList[index]
                return newValue;
            });

            let multifly = marged.map((a) => {
                return(
                    a.product_details.offers !== 0 ? 
                    (a.products.price - a.products.price * (a.product_details.discount.discount_percent)/100) * a.quantity :
                    (a.products.price * a.quantity)
                )
            });
            let sum = multifly.reduce((a, b) => a + b, 0)

            return{
                ...state,
                cart: marged,
                total_item: action.payload.carts.length,
                sub_total: sum,
            }
        }


    }

    return state;
}

export default CartReducer;