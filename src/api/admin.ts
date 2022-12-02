import { CurrentPageArticlesResponse, Article } from '../types';
import { makeGetRequest } from './axios';

const adminUrl = '/api/admin';

export const fetchCurrentPageArticlesResponse = (
  currentPage: number
) => makeGetRequest<CurrentPageArticlesResponse>(`${adminUrl}/articles?currentPage=${currentPage}`)();

export const fetchIndividualArticlesResponse = async (
  articleId: Article['articleId']
) => makeGetRequest<Article>(`${adminUrl}/articles/${articleId}`)();
