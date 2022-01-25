import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
