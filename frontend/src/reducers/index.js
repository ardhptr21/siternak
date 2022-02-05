import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import shopReducer from './shopReducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';
import transactionReducer from './transactionReducer';

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  shop: shopReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  transaction: transactionReducer,
});

export default reducers;
