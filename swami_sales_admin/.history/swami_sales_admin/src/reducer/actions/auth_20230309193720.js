import * as actionType from './actionType'



export const authStart = ()=> {
    return {
        type : actionType.AUTH_START
    }
}


export const authSuccess = token => {
    return {
        type: actionType.AUTH_SUCCESS,
        token : token
    }
}


export const authFail = error =>{
    return {
        type : actionType.AUTH_FAIL,
        error : error
    }
}