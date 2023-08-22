import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://120.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 2000,
});
export default instance;
