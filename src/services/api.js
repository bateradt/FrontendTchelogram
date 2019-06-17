import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tchelogram-backend.herokuapp.com', //'http://localhost:3002',
});

export default api;