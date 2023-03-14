import *  as actionType from './actions/actionType'
import {updateObject} from './Utility'

const initialState = {
    token: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        token : action.token
        error: null,
        loading: true
    });
}


const authSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}


const authFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}