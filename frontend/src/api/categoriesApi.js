import axiosInstance from '../axiosInstance';

export const getCategories = async () => {
  try {
    const result = await axiosInstance.get('/categories');
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (data, token) => {
  try {
    const result = await axiosInstance.post('/categories', data, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
