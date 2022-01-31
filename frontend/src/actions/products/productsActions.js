import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './productsTypes';
import { getAllProducts, createProduct, removeProduct, editProduct } from '../../api/productsApi';

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

export const deleteProduct = (product_id, token) => async (dispatch) => {
  try {
    await removeProduct(product_id, token);
    dispatch({ type: DELETE_PRODUCT, payload: product_id });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (product_id, data, token) => async (dispatch) => {
  try {
    const result = await editProduct(product_id, data, token);
    dispatch({ type: UPDATE_PRODUCT, payload: result.data.data });
  } catch (err) {
    console.log(err);
  }
};
