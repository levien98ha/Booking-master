import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducers from './reducers/index';
import { createStore } from 'redux';

const store = createStore(
    rootReducers
);

ReactDOM.render(
    <App />
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
