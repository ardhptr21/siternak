import { getCategories } from '../../api/categoriesApi';
import { GET_CATEGORIES } from './categoriesTypes';

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
