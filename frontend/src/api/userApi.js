import axiosInstance from '../axiosInstance';

export const getUser = async (user_id) => {
  try {
    const result = await axiosInstance.get(`/users/${user_id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};

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

export const updateUserPhotoData = async (photo, userId, token) => {
  try {
    return await axiosInstance.patch(`/users/${userId}/photo`, photo, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createUserShop = async (data, token) => {
  try {
    const result = await axiosInstance.post(`/shops`, data, {
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
