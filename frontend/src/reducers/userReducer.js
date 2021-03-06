import {
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_USER,
  UPDATE_USER_PHOTO,
  CREATE_SHOP,
  GET_USER,
} from '../actions/user/userTypes';

const initialState = {
  isLoggedIn: false,
  token: '',
  _id: '',
  name: '',
  username: '',
  telephone: '',
  address: {
    province: '',
    city: '',
    district: '',
    detail: '',
  },
  photo: '',
  role: '',
  isSeller: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return state;
    case GET_USER:
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };
    case LOGOUT:
      return initialState;
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case UPDATE_USER_PHOTO:
      return { ...state, photo: action.payload };
    case CREATE_SHOP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
