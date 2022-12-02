import { CurrentPageArticlesResponse, Article } from '../types';
import { makeGetRequest } from './axios';

const articlesUrl = '/api/articles';

export const fetchCurrentPageArticlesResponse = (
  currentPage: number
) => makeGetRequest<CurrentPageArticlesResponse>(`${articlesUrl}?currentPage=${currentPage}`)();

export const fetchIndividualArticlesResponse = (
  articleId: Article['articleId']
) => makeGetRequest<Article>(`${articlesUrl}?/${articleId}`)();
