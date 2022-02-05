import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from './cartTypes';
import { addCartItem, getCart, removeCartItem, updateCartItem } from '../../api/cartApi';

export const getCartList = (user_id, token) => async (dispatch) => {
  try {
    const result = await getCart(user_id, token);
    dispatch({
      type: GET_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (user_id, data, token) => async (dispatch) => {
  try {
    const result = await addCartItem(user_id, data, token);
    dispatch({
      type: ADD_TO_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (user_id, product_id, token) => async (dispatch) => {
  try {
    const result = await removeCartItem(user_id, product_id, token);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = (user_id, data, token) => async (dispatch) => {
  try {
    const result = await updateCartItem(user_id, data, token);
    dispatch({
      type: UPDATE_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};
