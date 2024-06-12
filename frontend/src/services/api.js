import axios from 'axios';

const API = axios.create({
  baseURL: 'https://site.epsilonhellas.com/api',  // Use the production URL
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;
