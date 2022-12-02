import { MainResponse } from '../types';
import { makeGetRequest } from './axios';

const mainUrl = '/api/main';

export const fetchMainResponse = makeGetRequest<MainResponse>(mainUrl);
