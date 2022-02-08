import {
  ADD_TRANSACTION,
  UPDATE_STATUS_TRANSACTION,
  GET_ALL_TRANSACTIONS,
} from '../actions/transaction/transactionTypes';
import { LOGOUT } from '../actions/user/userTypes';

const initialState = [];

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case GET_ALL_TRANSACTIONS:
      return action.payload || state;
    case UPDATE_STATUS_TRANSACTION:
      return state.map((transaction) => {
        if (transaction._id === action.payload.transaction_id) {
          return {
            ...transaction,
            status: action.payload.status,
          };
        }
        return transaction;
      });
    case ADD_TRANSACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default transactionReducer;
