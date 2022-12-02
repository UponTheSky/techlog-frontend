import React from 'react';
import { RouteObject } from 'react-router-dom';

import { ArticlesMainPage } from './Articles.main';
import { ArticlesIndividualPage } from './Articles.individual';

export const articlesMainRoute: RouteObject = { 
  path: "articles",
  element: <ArticlesMainPage /> 
};

export const articlesIndividualRoute: RouteObject = {
  path: "articles/:articleId",
  element: <ArticlesIndividualPage />
};
