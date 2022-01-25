import { LOGIN, LOGOUT } from '../actions/user/userTypes';

const initialState = {
  isLoggedIn: false,
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
