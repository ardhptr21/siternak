import { ADD_TRANSACTION, GET_BUYER, GET_SELLER, UPDATE_ORDER_DATA_STATUS } from './transactionTypes';
import { create, getBuyer, getSeller } from '../../api/transactionApi';

export const getTheBuyer = (buyer_id, token) => async (dispatch) => {
  try {
    const result = await getBuyer(buyer_id, token);
    dispatch({
      type: GET_BUYER,
      payload: result.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTheSeller = (shop_id, token) => async (dispatch) => {
  try {
    const result = await getSeller(shop_id, token);
    dispatch({
      type: GET_SELLER,
      payload: result.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTransaction = (data, token) => async (dispatch) => {
  try {
    await create(data, token);
    dispatch({ type: ADD_TRANSACTION });
    dispatch(getBuyer(data.buyer_id, token));
    dispatch(getSeller(data.shop_id, token));
  } catch (err) {
    console.log(err);
  }
};

export const updateOrdersData = (transaction_id, status) => {
  return {
    type: UPDATE_ORDER_DATA_STATUS,
    payload: { transaction_id, status },
  };
};
