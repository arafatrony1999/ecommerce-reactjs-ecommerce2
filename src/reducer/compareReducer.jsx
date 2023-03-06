const CompareReducer = (state, action) => {
    if(action.type === "MY_API_DATA"){
        return{
            ...state,
            compare: action.payload,
            compareCount: action.payload.length
        }
    }
    if(action.type === "SET_ADD_TO_COMPARE"){
        return{
            ...state,
            setUserCompare: action.payload
        }
    }
    if(action.type === "SET_REMOVE_FROM_COMPARE"){
        return{
            ...state,
            setUserRemove: action.payload
        }
    }
    if(action.type === "COMPARE_REMOVE_ITEM_SUCCESSFULL"){
        return{
            ...state,
            addCompareSuccess: false,
            removeCompareSuccess: true,
            existMsg: false
        }
    }
    if(action.type === "ADD_TO_COMPARE_SUCCESSFULL"){
        return{
            ...state,
            addCompareSuccess: true,
            removeCompareSuccess: false,
            existMsg: false
        }
    }
    if(action.type === "COMPARE_ALREADY_EXIST"){
        return{
            ...state,
            addCompareSuccess: false,
            removeCompareSuccess: false,
            existMsg: true
        }
    }
    if(action.type === "SET_INITIAL_COMPARE"){
        return{
            ...state,
            addCompareSuccess: false,
            removeCompareSuccess: false,
            existMsg: false
        }
    }
    if(action.type === "NO_USER"){
        return{
            ...state,
            noCompareUser: true
        }
    }

    if(action.type === "SET_NO_USER"){
        return{
            ...state,
            noCompareUser: false
        }
    }
    return state;
}

export default CompareReducer;
