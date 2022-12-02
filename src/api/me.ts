import { makeGetRequest } from './axios';
import { MeResponse } from '../types';

export const fetchMeResponse = makeGetRequest<MeResponse>('/api/me');
