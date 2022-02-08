import { ADD_TRANSACTION, UPDATE_STATUS_TRANSACTION, GET_ALL_TRANSACTIONS } from './transactionTypes';
import { create, getAll } from '../../api/transactionApi';

export const getAllTransactions = (token) => async (dispatch) => {
  try {
    const result = await getAll(token);
    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: result.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTransaction = (data, token) => async (dispatch) => {
  try {
    const result = await create(data, token);
    dispatch({ type: ADD_TRANSACTION, payload: result.data.data });
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTransactionStatus = (transaction_id, status) => {
  return {
    type: UPDATE_STATUS_TRANSACTION,
    payload: { transaction_id, status },
  };
};
