import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from '../actions/categories/categoriesTypes';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter((category) => category._id !== action.payload);
    case UPDATE_CATEGORY:
      return state.map((category) => (category._id === action.payload._id ? action.payload : category));
    default:
      return state;
  }
};

export default categoriesReducer;
