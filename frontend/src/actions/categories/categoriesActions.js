import { getCategories, createCategory, removeCategory, updateCategory } from '../../api/categoriesApi';
import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './categoriesTypes';

export const getAllCategories = () => async (dispatch) => {
  try {
    const result = await getCategories();
    dispatch({
      type: GET_CATEGORIES,
      payload: result.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addCategory = (data, token) => async (dispatch) => {
  try {
    const result = await createCategory(data, token);
    dispatch({
      type: ADD_CATEGORY,
      payload: result.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteCategory = (category_id, token) => async (dispatch) => {
  try {
    await removeCategory(category_id, token);
    dispatch({
      type: DELETE_CATEGORY,
      payload: category_id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editCategory = (category_id, data, token) => async (dispatch) => {
  try {
    const result = await updateCategory(category_id, data, token);
    dispatch({
      type: UPDATE_CATEGORY,
      payload: result.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};
