import { LOGIN, LOGOUT } from './userTypes';

export const loginUser = (data) => ({ type: LOGIN, payload: data });
export const logoutUser = () => ({ type: LOGOUT });
