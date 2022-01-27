import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import shopReducer from './shopReducer';

const reducers = combineReducers({ user: userReducer, products: productsReducer, shop: shopReducer });

export default reducers;
