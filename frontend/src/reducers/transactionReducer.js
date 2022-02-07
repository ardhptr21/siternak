import {
  ADD_TRANSACTION,
  GET_BUYER,
  GET_SELLER,
  UPDATE_ORDER_DATA_STATUS,
} from '../actions/transaction/transactionTypes';
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
    case UPDATE_ORDER_DATA_STATUS:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order._id === action.payload.transaction_id) {
            return { ...order, status: action.payload.status };
          }
          return order;
        }),
      };
    case ADD_TRANSACTION:
    default:
      return state;
  }
};

export default transactionReducer;
