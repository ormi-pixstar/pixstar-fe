import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixstar.site/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
  withCredentials: true,
});
export default instance;
