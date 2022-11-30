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
  mainUrls: {
    picture: Url;
    shortIntro: Url;
  };
  articles: Article[];
  menuUrls: {
    me: Url;
    articles: Url;
  };
}
