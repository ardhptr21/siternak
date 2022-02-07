import { GET_BY_ID, UPDATE_SHOP, UPDATE_SHOP_IMAGE } from '../actions/shops/shopTypes';
import { LOGOUT } from '../actions/user/userTypes';

const initialState = {
  _id: '',
  _userId: '',
  name: '',
  description: '',
  image: '',
  slug: '',
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case GET_BY_ID:
      return action.payload;
    case UPDATE_SHOP:
      return action.payload;
    case UPDATE_SHOP_IMAGE:
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
