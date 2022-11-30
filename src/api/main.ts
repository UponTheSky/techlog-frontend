import { MainResponse } from '../types';
import { apiClient } from './axios';

export const fetchMainResponse = async () => {
  try {
    const response = await apiClient.get('/api/main');
    return response.data as MainResponse;
  } catch(error) {
    return null;
  }
};
