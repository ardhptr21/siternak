import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '../actions/cart/cartTypes';
import { LOGOUT } from '../actions/user/userTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case GET_CART:
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case UPDATE_CART:
      return action.payload || initialState;
    default:
      return state;
  }
};

export default cartReducer;
