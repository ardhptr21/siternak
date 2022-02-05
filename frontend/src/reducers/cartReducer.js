import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '../actions/cart/cartTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case UPDATE_CART:
    default:
      return state;
  }
};

export default cartReducer;
