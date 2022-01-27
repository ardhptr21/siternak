import { CREATE_SHOP, LOGIN, LOGOUT, REGISTER, UPDATE_USER, UPDATE_USER_PHOTO } from './userTypes';
import {
  addNewUser,
  signInUser,
  updateUserData,
  updateUserPhotoData,
  createUserShop,
  getUser,
} from '../../api/userApi';
import { getShopById } from '../../actions/shops/shopActions';

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const result = await signInUser(username, password);
    const data = { ...result.data.data.user, token: result.data.data.token };
    dispatch({ type: LOGIN, payload: data });

    if (result.data.data.user.isSeller && result.data.data.user.role === 0) {
      dispatch(getShopById(result.data.data.user._id));
    }
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

export const updateUser = (data, userId, token) => async (dispatch) => {
  try {
    const result = await updateUserData(data, userId, token);
    dispatch({ type: UPDATE_USER, payload: result.data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateUserPhoto = (photo, userId, token) => async (dispatch) => {
  try {
    const result = await updateUserPhotoData(photo, userId, token);
    dispatch({ type: UPDATE_USER_PHOTO, payload: result.data.data.photo });
  } catch (err) {
    console.log(err);
  }
};

export const createShop = (data, token) => async (dispatch) => {
  try {
    const shopResult = await createUserShop(data, token);
    const userResult = await getUser(shopResult.data.data._userId, token);
    dispatch({ type: CREATE_SHOP, payload: userResult.data.data });
    dispatch(getShopById(userResult.data.data._id));
  } catch (err) {
    console.log(err.message);
  }
};

export const logoutUser = () => ({ type: LOGOUT });
