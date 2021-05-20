import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Defining logger and Redux-Thunk as middleware to Store
const middlewareList = [thunk, logger];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewareList)),
);
export default store;
