import axiosInstance from '../axiosInstance';

export const getAllProducts = async () => {
  try {
    const result = await axiosInstance.get('/products');
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async (data, token) => {
  try {
    const result = await axiosInstance.post('/products', data, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
