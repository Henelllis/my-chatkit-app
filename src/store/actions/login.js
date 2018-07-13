import Chatkit from '@pusher/chatkit';
import  { tokenUrl , instanceLocator }  from '../../config';
import * as actionTypes from './actionTypes';

export const loginStart = () => {
    return {
        type:actionTypes.LOGIN_START
    };
};

export const loginSuccess = (currentUser) => {
    return {
        type:actionTypes.LOGIN_SUCCESS,
        payload: {
            currentUser
        }
    };
};

export const loginFail = (error) => {
    return {
        type:actionTypes.LOGIN_FAIL,
        payload: {
            error
        }
    };
};


export const login = (userName) => {
    
    return dispatch => {
        dispatch(loginStart());
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: userName,
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        });

        chatManager.connect()
        .then( currentUser =>{
            dispatch(loginSuccess(currentUser));
        })
        .catch( err =>{
            dispatch(loginFail(err));
        })

    }

};
