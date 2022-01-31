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

export const removeProduct = async (product_id, token) => {
  try {
    await axiosInstance.delete(`/products/${product_id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const editProduct = async (product_id, data, token) => {
  try {
    const result = await axiosInstance.put(`/products/${product_id}`, data, {
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
