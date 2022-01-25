import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const reducers = combineReducers({ user: userReducer, products: productsReducer });

export default reducers;
