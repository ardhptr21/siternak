import axiosInstance from '../axiosInstance';

export const getAllProducts = async () => {
  try {
    const result = await axiosInstance.get('/products');
    return result.data;
  } catch (err) {
    console.log(err.message);
  }
};
