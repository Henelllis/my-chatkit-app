import * as actionTypes from '../actions/actionTypes';

const intialState= {
    currentUser: null,
    error: null,
    loading: false
};

const loginStart = (state,action) => {
     return {
         ...state,
         error: null,
         loading: true
     }
}

const loginSuccess = (state,action) => {
    console.log('THIS IS HOW WE DO IT');
    return {
        ...state,
        error: false,
        loading: false,
        currentUser: action.payload.currentUser
    }
}

const loginFail = (state,action) => {
    return {
        ...state,
        error: action.payload.error,
        loading: false,
    }
}

const reducer = (state=intialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_START:   return loginStart( state,action ) ;
        case actionTypes.LOGIN_SUCCESS: return loginSuccess( state,action );
        case actionTypes.LOGIN_FAIL:    return loginFail( state,action );
        default: return state;
    }
}

export default reducer;