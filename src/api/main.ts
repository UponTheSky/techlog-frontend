import { MainResponse } from '../types';
import { makeGetRequest } from './axios';

import { BACKEND_URL } from '../consts';

const mainUrl = `${BACKEND_URL}/api/main`;

export const fetchMainResponse = makeGetRequest<MainResponse>(mainUrl);
