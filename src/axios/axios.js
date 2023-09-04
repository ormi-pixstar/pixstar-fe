import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
  withCredentials: true,
});
export default instance;
