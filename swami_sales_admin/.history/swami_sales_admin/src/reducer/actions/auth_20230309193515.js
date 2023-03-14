import * as actionType from './actionType'



export const authStart = ()=> {
    return {
        type : actionType.AUTH_START
    }
}


export const authSuccess = () => {
    return {
        type: actionType.AUTH_FAIL
    }
}


export const authFail = () =>{
    return {
        type : actionType.AUTH_FAIL
    }
}