import { LOGIN, LOGOUT, REGISTER } from './userTypes';
import { addNewUser, signInUser } from '../../api/userApi';

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const result = await signInUser(username, password);
    const data = { ...result.data.data.user, token: result.data.data.token };
    dispatch({ type: LOGIN, payload: data });
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const result = await addNewUser(data);
    dispatch({ type: REGISTER });
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

export const logoutUser = () => ({ type: LOGOUT });
