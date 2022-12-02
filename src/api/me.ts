import { apiClient } from './axios';
import { MeResponse } from '../types';

export const fetchMeResponse = async () => {
  try {
    const response = await apiClient.get<MeResponse>('/api/me');
    return response.data;
  } catch(error) {
    return null;
  }
}
