import axiosInstance from '../axiosInstance';

export const addNewUser = async (data) => {
  try {
    return await axiosInstance.post('/users/', data);
  } catch (err) {
    console.log(err.message);
  }
};
