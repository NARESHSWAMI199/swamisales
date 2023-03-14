import { host } from '../../Global'
import * as actionType from './actionType'
import axios from 'axios'
import { useDispatch } from 'react-redux'




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


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionType.AUTH_LOGOUT
    };
}


export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}



export const authLogin = (username, password) => {
    const dispatch = useDispatch()
    // return dispatch => {
        dispatch(authStart());
        axios.post(host+'/auth/api/token', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.access;
                document.write('her.....')
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    // }
}


// export const authCheckState = () => {
//     const dispatch = useDispatch()
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (token === undefined) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem('expirationDate'));
//             if (expirationDate <= new Date()) {
//                 dispatch(logout());
//             } else {
//                 dispatch(authSuccess(token));
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
//             }
//         }
//     }
// }