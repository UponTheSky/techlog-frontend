type Url = string;

export interface Article {
  id: number
  createdAt: string
  updatedAt: string
  thumbnail: string | null
  title: string
  excerpt: string | null
  content: string | null
  articleId: string
}

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
  meInfos: {
    profile: Url;
    shortIntro: string;
    education: string;
    workExperience: string;
    compSci: string;
    hobbies: string;
    externalLinks: string;
  }
}

export interface LoginDTO {
  userId: string;
  password: string;
}

export interface LoginResponse { 
  token: string;
}
