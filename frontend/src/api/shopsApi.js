import axiosInstance from '../axiosInstance';

export const updateShopData = async (data, shop_id, token) => {
  try {
    const result = await axiosInstance.put(`/shops/${shop_id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const shopById = async (user_id) => {
  try {
    const result = await axiosInstance.get(`/shops/${user_id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const updateShopImage = async (image, shop_id, token) => {
  try {
    const result = await axiosInstance.patch(`/shops/${shop_id}/image`, image, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
