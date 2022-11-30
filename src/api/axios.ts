import axios from 'axios';
import { BACKEND_URL } from '../consts';

export const apiClient = axios.create({ 
  baseURL: BACKEND_URL
});
