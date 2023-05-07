import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';
import { useProductContext } from "./productContext";
import { useUserContext } from "./UserContext";

const CartContext  = createContext();

const cartAPI = 'http://127.0.0.1:8000/api/getCart';

const initialState = {
    isCartLoading: false,
    cart: [],
    addSuccess: false,
    removeSuccess: false,
    setCartItem: {},
    unsetCartItem: {},
    // cartAdd: null,
    total_item: 0,
    sub_total: 0,
    txn: '',
    senderNumber: '',
    noUser: false,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const { user } = useUserContext();
    const { products } = useProductContext();

    const confirmOrder = (addressID, txnID, senderNumber) => {
        const formData = new FormData()
        formData.append('userID', user[0].id)
        formData.append('addressID', addressID)
        formData.append('txnID', txnID)
        formData.append('senderNumber', senderNumber)
        axios.post('http://127.0.0.1:8000/api/confirmOrder', formData)
        .then((res) => {
            if(res.data.status === 400){

            }else if(res.data.status === 401){

            }else{
                throw Error('Server not responding')
            }
        })
        .catch((error) => {

        })
    }

    const sendMoneyInfo = (txn, senderNumber) => {
        dispatch({type: 'SEND_MONEY_INFO', payload: {txn, senderNumber}})
    }

    const addToCart = (e, qty, product) => {
        e.preventDefault();
        dispatch({type: "SET_NO_USER"})
        return dispatch({type: "ADD_TO_CART", payload: {qty, product}})
    }

    const removeFromCart = (e, qty, product) => {
        e.preventDefault();
        return dispatch({type: "REMOVE_FROM_CART", payload: {qty, product}})
    }

    
    const getCartItems = async (url) => {
        const formData = new FormData();
        
        if(user.length !== 0){
            formData.append('user_id',user[0].id)
            
            try{
                const res = await axios.post(url, formData);
                const carts = await res.data;
        
                dispatch({type: "MY_API_DATA", payload: {carts, products}});
            }
            catch(error){
                dispatch({type: "API_ERROR"});
            }
        }
    }


    useEffect(() => {
        getCartItems(cartAPI)
        //eslint-disable-next-line
    }, [user, state.setCartItem, state.unsetCartItem, state.addSuccess, state.removeSuccess])


    useEffect(() => {
        if(Object.keys(state.setCartItem).length === 0){

        }else{
            let url = 'http://127.0.0.1:8000/api/addToCart';
            const formData = new FormData();
            formData.append('product', state.setCartItem.id)

            if(user.length !== 0){
                formData.append('id',user[0].id)
                formData.append('qty',state.setCartItem.quantity)

                if(user[0].user === 0){
                    dispatch({type: "NO_USER"})
                }else{
                    try{ 
                        axios.post(url, formData)
                        .then((res) => {
                            if(res.data === 1){
                                dispatch({type: "ADD_TO_CART_SUCCESSFUL", payload: res.data})
                            }else{
                                dispatch({type: "API_ERROR"})
                            }
                        })
                    }catch(error){
                        dispatch({type: "API_ERROR"})
                    }
            
                    // dispatch({type: "ADD_TO_CART_SUCCESSFUL"})
                }
            }
        }

    }, [state.setCartItem, user]);

    
    useEffect(() => {
        if(Object.keys(state.unsetCartItem).length === 0){

        }else{
            let url = 'http://127.0.0.1:8000/api/removeFromCart';
            const formData = new FormData();
            
            formData.append('product', state.unsetCartItem.id)
            if(user.length !== 0){
                formData.append('id',user[0].id)
            }
            formData.append('qty',state.unsetCartItem.quantity)

            try{ 
                axios.post(url, formData)
                .then((res) => {
                    if(res.data === 1){
                        dispatch({type: "REMOVE_FROM_CART_SUCCESSFUL", payload: res.data})
                    }else{
                        dispatch({type: "API_ERROR"})
                    }
                })

            }catch(error){
                dispatch({type: "API_ERROR"})
            }
    
            dispatch({type: "REMOVE_FROM_CART_SUCCESSFUL"})
        }

    }, [state.unsetCartItem, user]);

    return(
        <CartContext.Provider value={{...state, addToCart, removeFromCart, sendMoneyInfo, confirmOrder}} >
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {useCartContext, CartContext, CartProvider}