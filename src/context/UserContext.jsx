import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/userReducer';

const UserContext = createContext();

const initialState = {
    isLoading: false,
    userUpdateSuccessfull: false,
    userUpdateFailed: false,
    incorrect: false,
    correct: false,
    user: []
}

const api = "http://127.0.0.1:8000/api/getUser"

const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateUser = (name, phone, address) => {

        dispatch({type: "UPDATE_ALL"})

        let url = 'http://127.0.0.1:8000/api/updateUser';
        const localAuth = localStorage.getItem("auth");
        const userAuth = JSON.parse(localAuth);
        const formData = new FormData();

        formData.append('auth', userAuth.auth)
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('address', address)

        axios.post(url, formData)
        .then((res) => {
            if(res.data === 1){
                dispatch({type: "USER_UPDATE_SUCCESSFULL"})
            }else{
                dispatch({type: "USER_NOT_UPDATE"})
            }
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
                dispatch({type: "PASSWORD_UPDATE_SUCCESSFULL"})
                getUser(api)
            }
        })
    }



    const getUser = (url) => {
        const localAuth = localStorage.getItem("auth");
        const userAuth = JSON.parse(localAuth);

        if(userAuth !== null){
            const formData = new FormData();
            formData.append('auth', userAuth.auth)

            try{
                axios.post(url, formData)
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
        getUser(api)
    }, [state.userUpdateSuccessfull, state.incorrect, state.correct]);

    return(
        <UserContext.Provider value={{...state, updateUser, updatePassword }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(UserContext)
}

export {useUserContext, UserContext, UserProvider}