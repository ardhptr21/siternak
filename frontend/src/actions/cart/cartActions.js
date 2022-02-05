import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from './cartTypes';
import { addCartItem, getCart, removeCartItem, updateCartItem } from '../../api/cartApi';

export const getCartList = (user_id) => async (dispatch) => {
  try {
    const result = await getCart(user_id);
    dispatch({
      type: GET_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (user_id, product_id, quantity) => async (dispatch) => {
  try {
    const result = await addCartItem(user_id, product_id, quantity);
    dispatch({
      type: ADD_TO_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (user_id, product_id) => async (dispatch) => {
  try {
    const result = await removeCartItem(user_id, product_id);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = (user_id, product_id, quantity) => async (dispatch) => {
  try {
    const result = await updateCartItem(user_id, product_id, quantity);
    dispatch({
      type: UPDATE_CART,
      payload: result.data.data.carts,
    });
  } catch (error) {
    console.log(error);
  }
};
