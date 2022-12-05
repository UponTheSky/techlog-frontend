import { CurrentPageArticlesResponse, Article, LoginDTO, LoginResponse } from '../types';
import { makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest } from './axios';

const adminUrl = '/api/admin';

export const fetchCurrentPageArticlesResponse = (
  currentPage: number,
  token: string,
) => makeGetRequest<CurrentPageArticlesResponse>(`${adminUrl}/articles?currentPage=${currentPage}`, token)();

export const fetchIndividualArticlesResponse = async (
  articleId: Article['articleId'], 
  token: string
) => makeGetRequest<Article>(`${adminUrl}/articles/${articleId}`, token)();

export const createArticle = (
  data: Partial<Article>,
  token: string
) => makePostRequest<Partial<Article>, Article>(`${adminUrl}/articles`, token)(data);

export const updateArticle = (
  articleId: Article['articleId'], 
  data: Partial<Article>,
  token: string
) => makePutRequest<Partial<Article>, Article>(`${adminUrl}/articles/${articleId}`, token)(data);

export const deleteArticle = (
  articleId: Article['articleId'],
  token: string
) => makeDeleteRequest<Article>(`${adminUrl}/articles/${articleId}`, token)();

export const login = (
  userId: string, 
  password: string
) => makePostRequest<LoginDTO, LoginResponse>(`${adminUrl}/login`)({ userId, password });
