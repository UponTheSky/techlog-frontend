import axios, { AxiosResponse } from 'axios';
import { rawListeners } from 'process';
import { BACKEND_URL } from '../consts';

const apiClient = axios.create({ 
  baseURL: BACKEND_URL
});

export const makeGetRequest = <Response>(url: string, token?: string) => async () => {
  try {
    const response = await apiClient.get<Response>(url, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  } catch(error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const makePostRequest = <Data, Response>(url: string, token?: string) => async (data: Data) => {
  try {
    const response = await apiClient.post<Response, AxiosResponse<Response>, Data>(url, data, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  } catch(error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const makePutRequest = <Data, Response>(url: string, token?: string) => async (data: Data) => {
  try {
    const response = await apiClient.put<Response, AxiosResponse<Response>, Data>(url, data, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  } catch(error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export const makeDeleteRequest = <Response>(url: string, token?: string) => async () => {
  try {
    const response = await apiClient.delete<Response>(url, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  } catch(error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
