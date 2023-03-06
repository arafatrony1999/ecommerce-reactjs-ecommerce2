import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/compareReducer';
import { useUserContext } from "./UserContext";

const CompareContext = createContext();

const initialState = {
    compare: [],
    setUserCompare: {},
    setUserRemove: {},
    addCompareSuccess: false,
    removeCompareSuccess: false,
    existMsg: false,
    compareCount: 0,
    noCompareUser: false
}

const CompareProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const { user } = useUserContext();

    const addToCompare = (e, product) => {
        e.preventDefault();
        dispatch({type: "SET_NO_USER"})
        dispatch({type: "SET_ADD_TO_COMPARE", payload: product })
    }


    const removeFromCompare = (e, product) => {
        e.preventDefault();

        dispatch({type: "SET_REMOVE_FROM_COMPARE", payload: product})
    }

    useEffect(() => {
        
        let url = 'http://127.0.0.1:8000/api/addToCompare';
        const formData = new FormData()

        if(user.length !== 0){
            dispatch({type: "SET_INITIAL_COMPARE"})

            if(user[0].user === 0){
                dispatch({type: "NO_USER"})
            }else{
                try{
                    formData.append('user_id', user[0].id)
                    formData.append('product_id', state.setUserCompare.id)
                    axios.post(url, formData)
                    .then((res) => {
                        if(res.data === 1){
                            dispatch({type: "ADD_TO_COMPARE_SUCCESSFULL"})
                        }else{
                            dispatch({type: "COMPARE_ALREADY_EXIST"})
                        }
                    })
        
                }
                catch(error){
                    dispatch({type: "API_ERROR", payload: error})
                }
            }
        }
        //eslint-disable-next-line
    }, [state.setUserCompare])

    useEffect(() => {
        if(user.length !== 0){
            dispatch({type: "SET_INITIAL_COMPARE"})
            let url = 'http://127.0.0.1:8000/api/removeFromCompare';
            const formData = new FormData();

            formData.append('user_id', user[0].id)
            formData.append('product_id', state.setUserRemove.id)

            axios.post(url, formData)
            .then((res) => {
                dispatch({type: "COMPARE_REMOVE_ITEM_SUCCESSFULL"})
            })
        }
        //eslint-disable-next-line
    }, [state.setUserRemove])

    useEffect(() => {
        if(user.length !== 0 ){
            let url = 'http://127.0.0.1:8000/api/getMyCompareList';
            const formData = new FormData();
            formData.append('user_id',user[0].id)
            try{
                axios.post(url, formData)
                .then((res) => {
                    dispatch({type: "MY_API_DATA", payload: res.data})
                })
            }
            catch(error){
                dispatch({type: "API_ERROR"})
            }
        }
    }, [state.setUserCompare, state.setUserRemove, user]);

    return(
        <CompareContext.Provider value={{...state, addToCompare, removeFromCompare}}>
            {children}
        </CompareContext.Provider>
    )
}

const useCompareContext = () => {
    return useContext(CompareContext);
}

export {useCompareContext, CompareContext, CompareProvider}