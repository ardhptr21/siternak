import axiosInstance from '../axiosInstance';

export const getAll = async (token) => {
  try {
    const result = await axiosInstance.get('/transaction', {
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
    const result = await axiosInstance.post('/transaction', data, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const uploadProofPayment = async (data, token) => {
  try {
    axiosInstance.post('/proof-payment', data, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProofPaymentImage = async (transaction_id, token) => {
  try {
    const result = await axiosInstance.get(`proof-payment/${transaction_id}/transaction`, {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};
