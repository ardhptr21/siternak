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

export const updateUserData = async (data, userId, token) => {
  console.log('DATA', data);
  console.log('USERID', userId);
  console.log('TOKEN', token);
  try {
    return await axiosInstance.put(`/users/${userId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
