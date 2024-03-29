import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './redux/reducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
  
let store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render (
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
