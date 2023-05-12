import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/userReducer';

const UserContext = createContext();

const initialState = {
    isLoading: false,
    userUpdateSuccessful: false,
    userUpdateFailed: false,
    incorrect: false,
    correct: false,
    selectedAddress: {},
    agreeCheck: false,
    paymentMethod: {
        id: 'cod',
        title: 'Cash On Delivery'
    },
    coupon: {},
    noCoupon: false,
    user: []
}

const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmitCoupon = (coupon) => {
        const formData = new FormData()
        formData.append('coupon', coupon)

        axios.post('http://127.0.0.1:8000/api/checkCoupon', formData)
        .then((res) => {
            if(res.data.status === 400){
                dispatch({type: 'COUPON_FOUND', payload: res.data.data})
            }else if(res.data.status === 401){
                dispatch({type: 'NO_COUPON'})
            }else{
                throw Error('Server not responding. Try again later')
            }
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const selectPaymentMethod = (method) => {
        dispatch({type: 'SELECT_PAYMENT_METHOD', payload: method})
    }

    const setSelectedAddress = (id) => {
        dispatch({type: 'SET_SELECTED_ADDRESS', payload: id})
    }

    const agreeChange = () => {
        dispatch({type: 'AGREE_CHANGE', payload: state.agreeCheck})
    }

    const updateUser = (name, phone, email, password) => {

        dispatch({type: "UPDATE_ALL"})

        let url = 'http://127.0.0.1:8000/api/updateUser';
        const formData = new FormData();

        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('email', email)
        formData.append('password', password)

        axios.post(url, formData)
        .then((res) => {
            if(res.data.status === 400){
                dispatch({type: "USER_UPDATE_SUCCESSFUL"})
            }else if(res.data.status === 401){
                dispatch({type: "INCORRECT_PASSWORD"})
            }else{
                throw Error("You didn't update any data")
            }
        })
        .catch((error) => {
            dispatch({type: "USER_NOT_UPDATE"})
        })
    }

    

    const updatePassword = (old, new1) => {
        let url = 'http://127.0.0.1:8000/api/updateUserPassword';
        const localAuth = localStorage.getItem("auth");
        const userAuth = JSON.parse(localAuth);

        let formData = new FormData();
        formData.append('auth', userAuth.auth)
        formData.append('old', old)
        formData.append('new', new1)

        axios.post(url, formData)
        .then((res) => {
            if(res.data.error === 0){
                dispatch({type: "INCORRECT_PASSWORD"})
            }else{
                localStorage.removeItem('auth')
                localStorage.setItem('auth', JSON.stringify(res.data))
                dispatch({type: "PASSWORD_UPDATE_SUCCESSFUL"})
                getUser()
            }
        })
    }



    const getUser = () => {
        const localAuth = localStorage.getItem("auth");
        const userAuth = JSON.parse(localAuth);

        if(userAuth !== null){
            const formData = new FormData();
            formData.append('auth', userAuth.auth)

            try{
                axios.post('http://127.0.0.1:8000/api/getUser', formData)
                .then((res) => {
                    dispatch({type: "USER_DATA", payload: res.data})
                })

            }
            catch(error){
                dispatch({type: "API_ERROR"});
            }

        }else{
            dispatch({type: "NO_USER_FOUND"})
        }
    }

    useEffect(() => {
        getUser()
    }, [state.userUpdateSuccessful, state.incorrect, state.correct]);

    return(
        <UserContext.Provider value={{...state, updateUser, updatePassword, getUser, setSelectedAddress, agreeChange, selectPaymentMethod, onSubmitCoupon }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(UserContext)
}

export {useUserContext, UserContext, UserProvider}