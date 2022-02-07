import { GET_CATEGORIES, ADD_CATEGORY } from '../actions/categories/categoriesTypes';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case ADD_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
