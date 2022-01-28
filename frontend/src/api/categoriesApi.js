import axiosInstance from '../axiosInstance';

export const getCategories = async () => {
  try {
    const result = await axiosInstance.get('/categories');
    return result;
  } catch (error) {
    console.log(error);
  }
};
