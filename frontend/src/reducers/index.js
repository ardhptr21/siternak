import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import shopReducer from './shopReducer';
import categoriesReducer from './categoriesReducer';

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  shop: shopReducer,
  categories: categoriesReducer,
});

export default reducers;
