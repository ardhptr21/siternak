import { ADD_TRANSACTION, GET_BUYER, GET_SELLER } from '../actions/transaction/transactionTypes';

const initialState = {
  delivery: [],
  order: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUYER:
      return { ...state, order: action.payload };
    case GET_SELLER:
      return { ...state, delivery: action.payload };
    case ADD_TRANSACTION:
    default:
      return state;
  }
};

export default transactionReducer;
