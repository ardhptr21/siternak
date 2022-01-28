import { SET_PRODUCTS, ADD_PRODUCT } from './productsTypes';
import { getAllProducts, createProduct } from '../../api/productsApi';

export const setProducts = () => async (dispatch) => {
  try {
    const result = await getAllProducts();
    dispatch({ type: SET_PRODUCTS, payload: result.data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const addProduct = (data, token) => async (dispatch) => {
  try {
    const result = await createProduct(data, token);
    dispatch({ type: ADD_PRODUCT, payload: result.data.data });
  } catch (err) {
    console.log(err.message);
  }
};
