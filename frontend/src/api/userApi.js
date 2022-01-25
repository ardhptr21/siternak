import axiosInstance from '../axiosInstance';

export const addNewUser = async (data) => {
  try {
    return await axiosInstance.post('/users/', data);
  } catch (err) {
    console.log(err.message);
  }
};

export const signInUser = async (email, password) => {
  try {
    return await axiosInstance.post('/auth/login', { email, password });
  } catch (err) {
    console.log(err.message);
  }
};
