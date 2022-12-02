import axios from 'axios';
import { BACKEND_URL } from '../consts';

const apiClient = axios.create({ 
  baseURL: BACKEND_URL
});

export const makeGetRequest = <T>(url: string) => async () => {
  try {
    const response = await apiClient.get<T>(url);
    return response.data;
  } catch(error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
