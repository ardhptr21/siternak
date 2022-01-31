import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/products/productsTypes';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((product) => product._id !== action.payload);
    case UPDATE_PRODUCT:
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      });
    default:
      return state;
  }
};

export default productsReducer;
