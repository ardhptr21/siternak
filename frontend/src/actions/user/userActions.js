import { LOGIN, LOGOUT, REGISTER } from './userTypes';
import { addNewUser, signInUser } from '../../api/userApi';

export const loginUser = (username, password) => async (dispatch) => {
  const result = await signInUser(username, password);
  const data = { ...result.data.data.user, token: result.data.data.token };
  dispatch({ type: LOGIN, payload: data });
  return result;
};

export const registerUser = (data) => async (dispatch) => {
  const result = await addNewUser(data);
  dispatch({ type: REGISTER });
  return result;
};

export const logoutUser = () => ({ type: LOGOUT });
