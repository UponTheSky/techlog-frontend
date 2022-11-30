import { CurrentPageArticlesResponse, Article } from '../types';
import { apiClient } from './axios';

export const fetchCurrentPageArticlesResponse = async (currentPage: number) => {
  try {
    const response = await apiClient.get<
      CurrentPageArticlesResponse
    >(`/api/articles?currentPage=${currentPage}`);
    return response.data;
  } catch(error) {
    return null;
  }
}

export const fetchIndividualArticlesResponse = async (articleId: Article['articleId']) => {
  try {
    const response = await apiClient.get<Article>(`/api/articles/${articleId}`);
    return response.data;
  } catch(error) {
    return null;
  }
}
