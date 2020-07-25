import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Routes from "./Routes/Routes";
import combineReducers from "./Reducers/combineReducers";
import './Styles/style.scss'

const store = createStore(
    combineReducers,
    compose(
        applyMiddleware(thunk)
    )
);

ReactDOM.render((
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    ),
  document.getElementById('root')
);


