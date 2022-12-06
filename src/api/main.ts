import { MainResponse } from '../types';
import { makeGetRequest } from './axios';

export const fetchMainResponse = makeGetRequest<MainResponse>('/api/main');
