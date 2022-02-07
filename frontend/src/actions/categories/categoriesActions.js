import { getCategories, createCategory } from '../../api/categoriesApi';
import { GET_CATEGORIES, ADD_CATEGORY } from './categoriesTypes';

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
