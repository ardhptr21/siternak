import axiosInstance from '../axiosInstance';

export const getBuyer = async (buyer_id, token) => {
  try {
    const result = await axiosInstance.get(`transaction/buyer/${buyer_id}`, {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getSeller = async (shop_id, token) => {
  try {
    const result = await axiosInstance.get(`transaction/seller/${shop_id}`, {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const create = async (data, token) => {
  try {
    axiosInstance.post('/transaction', data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
