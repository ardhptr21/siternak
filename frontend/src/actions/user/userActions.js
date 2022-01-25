import { LOGIN, LOGOUT, REGISTER } from './userTypes';
import { addNewUser } from '../../api/userApi';

export const loginUser = (data) => ({ type: LOGIN, payload: data });

export const registerUser = (data) => async (dispatch) => {
  const result = await addNewUser(data);
  dispatch({ type: REGISTER });
  return result;
};

export const logoutUser = () => ({ type: LOGOUT });
