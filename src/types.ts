export type Url = string;

export interface Article {
  id: number
  createdAt: Date
  updatedAt: Date
  thumbnail: string | null
  title: string
  excerpt: string | null
  content: string | null
  articleId: string
}

export type Page = 
  'main' | 
  'articles' | 
  'admin';

export interface MainResponse {
  mainInfos: {
    picture: Url;
    shortIntro: Url;
  };
  articles: Article[];
}

export interface CurrentPageArticlesResponse {
  info: {
    totalArticlesCount: number;
    totalPagesCount: number;
    currentPage: number;
  };
  articles: Article[];
}

export interface MeResponse {
  profile: Url;
  shortIntro: string;
  education: string;
  workExperience: string;
  compSci: string;
  hobbies: string;
}

export interface LoginDTO {
  userId: string;
  password: string;
}
