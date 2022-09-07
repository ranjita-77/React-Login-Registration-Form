import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

const store = configureStore(
    {
        reducer:rootReducer
    },
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store

