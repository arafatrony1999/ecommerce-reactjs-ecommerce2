const UserReducer = (state, action) => {

    if(action.type === "USER_DATA"){
        return{
            ...state,
            userUpdateSuccessful: false,
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
            userUpdateSuccessful: false,
            userUpdateFailed: false,
            correct: false,
            incorrect: false,
        }
    }

    if(action.type === "USER_UPDATE_SUCCESSFUL"){
        return{
            ...state,
            correct: false,
            incorrect: false,
            userUpdateFailed: false,
            userUpdateSuccessful: true,
        }
    }

    if(action.type === "USER_NOT_UPDATE"){
        return{
            ...state,
            correct: false,
            incorrect: false,
            userUpdateSuccessful: false,
            userUpdateFailed: true,
        }
    }

    if(action.type === "INCORRECT_PASSWORD"){
        return{
            ...state,
            userUpdateSuccessful: false,
            userUpdateFailed: false,
            correct: false,
            incorrect: true,
        }
    }

    if(action.type === "PASSWORD_UPDATE_SUCCESSFUL") {
        return{
            ...state,
            userUpdateSuccessful: false,
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

    if(action.type === 'AGREE_CHANGE'){
        return{
            ...state,
            agreeCheck: action.payload === false ? true : false
        }
    }

    if(action.type === 'SELECT_PAYMENT_METHOD'){
        return{
            ...state,
            paymentMethod: action.payload
        }
    }

    if(action.type === 'COUPON_FOUND'){
        return{
            ...state,
            noCoupon: false,
            coupon: action.payload
        }
    }

    if(action.type === 'NO_COUPON'){
        return{
            ...state,
            noCoupon: true,
            coupon: {}
        }
    }

    return state;
}

export default UserReducer;
