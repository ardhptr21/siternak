import { SET_PRODUCTS, ADD_PRODUCT } from '../actions/products/productsTypes';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productsReducer;
