import axios from 'axios';
import urls from '../config/urls';

const api = axios.create({
  baseURL: urls.baseURL,
});

export default api;
