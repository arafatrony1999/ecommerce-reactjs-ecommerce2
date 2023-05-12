import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/orderReducer'
import axios from "axios";
import { useUserContext } from "./UserContext";

const OrderContext = createContext();

const initialState = {
    orders: [],
}

const OrderProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { user } = useUserContext()

    const getOrders = async () => {
        if(user.length !== 0){
            await axios.get(`http://127.0.0.1:8000/api/getOrder?user_id=${user[0].id}`)
            .then((res) => {
                dispatch({type: 'ALL_ORDERS', payload: res.data})
            })
            .catch((error) => {
    
            })
        }
    }

    useEffect(() => {
        getOrders()
        // eslint-disable-next-line
    }, [user])

    return(
        <OrderContext.Provider value={{...state, getOrders}}>
            {children}
        </OrderContext.Provider>
    )
}

const useOrderContext = () => {
    return useContext(OrderContext)
}

export {useOrderContext, OrderContext, OrderProvider}