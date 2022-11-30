import { MainResponse } from '../types';
import { apiClient } from './axios';

export const fetchMainResponse = async () => {
  try {
    const response = await apiClient.get<MainResponse>('/api/main');
    return response.data;
  } catch(error) {
    return null;
  }
};
