import { shopById, updateShopData, updateShopImage } from '../../api/shopsApi';
import { GET_BY_ID, UPDATE_SHOP_IMAGE, UPDATE_SHOP } from './shopTypes';

export const getShopById = (user_id) => async (dispatch) => {
  try {
    const result = await shopById(user_id);
    dispatch({ type: GET_BY_ID, payload: result.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const updateShop = (data, shop_id, token) => async (dispatch) => {
  try {
    const result = await updateShopData(data, shop_id, token);
    dispatch({ type: UPDATE_SHOP, payload: result.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const shopImageUpdate = (image, shop_id, token) => async (dispatch) => {
  try {
    const result = await updateShopImage(image, shop_id, token);
    dispatch({ type: UPDATE_SHOP_IMAGE, payload: result.data.data.image });
  } catch (err) {
    console.log(err);
  }
};
