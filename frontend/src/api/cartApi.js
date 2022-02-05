import axiosInstance from '../axiosInstance';

export const getCart = async (user_id, token) => {
  try {
    const result = await axiosInstance.get(`/cart/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addCartItem = async (user_id, data, token) => {
  try {
    const result = await axiosInstance.post(`/cart/${user_id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateCartItem = async (user_id, data, token) => {
  try {
    const result = await axiosInstance.put(`/cart/${user_id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItem = async (user_id, product_id, token) => {
  try {
    const result = await axiosInstance.delete(`/cart/${user_id}/${product_id}`, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
