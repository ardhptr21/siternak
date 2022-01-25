import { SET_PRODUCTS } from './productsTypes';
import { getAllProducts } from '../../api/productsApi';

export const setProducts = () => async (dispatch) => {
  try {
    const result = await getAllProducts();
    dispatch({ type: SET_PRODUCTS, payload: result.data });
  } catch (err) {
    console.log(err.message);
  }
};
