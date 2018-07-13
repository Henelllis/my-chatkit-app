import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider,  } from 'react-redux';
import thunk from 'redux-thunk';

import loginReducer from './store/reducers/login';

import App from './App';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const reducers = combineReducers({
    login:  loginReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)) );

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                ,  document.getElementById('root'));