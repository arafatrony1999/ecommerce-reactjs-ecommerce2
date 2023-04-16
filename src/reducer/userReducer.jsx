const UserReducer = (state, action) => {

    if(action.type === "USER_DATA"){
        return{
            ...state,
            userUpdateSuccessfull: false,
            userUpdateFailed: false,
            correct: false,
            incorrect: false,
            user: action.payload
        }
    }

    if(action.type === "NO_USER_FOUND"){
        return{
            ...state,
            user: [{user: 0}]
        }
    }

    if(action.type === "UPDATE_ALL"){
        return{
            ...state,
            userUpdateSuccessfull: false,
            userUpdateFailed: false,
            correct: false,
            incorrect: false,
        }
    }

    if(action.type === "USER_UPDATE_SUCCESSFULL"){
        return{
            ...state,
            correct: false,
            incorrect: false,
            userUpdateFailed: false,
            userUpdateSuccessfull: true,
        }
    }

    if(action.type === "USER_NOT_UPDATE"){
        return{
            ...state,
            correct: false,
            incorrect: false,
            userUpdateSuccessfull: false,
            userUpdateFailed: true,
        }
    }

    if(action.type === "INCORRECT_PASSWORD"){
        return{
            ...state,
            userUpdateSuccessfull: false,
            userUpdateFailed: false,
            correct: false,
            incorrect: true,
        }
    }

    if(action.type === "PASSWORD_UPDATE_SUCCESSFULL") {
        return{
            ...state,
            userUpdateSuccessfull: false,
            userUpdateFailed: false,
            incorrect: false,
            correct: true,
        }
    }

    if(action.type === 'SET_SELECTED_ADDRESS'){
        return{
            ...state,
            selectedAddress: action.payload
        }
    }

    return state;
}

export default UserReducer;
