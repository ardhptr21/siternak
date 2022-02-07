import { ADD_TRANSACTION, GET_BUYER, GET_SELLER } from '../actions/transaction/transactionTypes';
import { LOGOUT } from '../actions/user/userTypes';

const initialState = {
  deliveries: [],
  orders: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case GET_BUYER:
      return { ...state, orders: action.payload };
    case GET_SELLER:
      return { ...state, deliveries: action.payload };
    case ADD_TRANSACTION:
    default:
      return state;
  }
};

export default transactionReducer;
