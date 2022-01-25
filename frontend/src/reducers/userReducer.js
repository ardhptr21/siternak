import { LOGIN, LOGOUT, REGISTER } from '../actions/user/userTypes';

const initialState = {
  isLoggedIn: false,
  token: '',
  id: '',
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
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
