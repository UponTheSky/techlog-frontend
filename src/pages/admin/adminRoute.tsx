import React from 'react';
import { RouteObject } from 'react-router-dom';
import { AdminArticlesPage } from './Admin.articles';
import { AdminArticlesCreatePage } from './Admin.articles.create';
import { AdminArticlesUpdatePage } from './Admin.articles.update';
import { AdminLoginPage } from './Admin.login';
import { AdminMainPage } from './Admin.main';

const adminArticlesRoute: RouteObject = {
  path: 'articles',
  element: <AdminArticlesPage />
};

const adminArticlesCreateRoute: RouteObject = {
  path: 'articles/create',
  element: <AdminArticlesCreatePage />
};

const adminArticlesUpdateRoute: RouteObject = {
  path: 'articles/update/:articlesId',
  element: <AdminArticlesUpdatePage />
};

const adminLoginRoute: RouteObject = {
  path: 'login',
  element: <AdminLoginPage />
};

export const adminMainRoute: RouteObject = {
  path: 'admin',
  element: <AdminMainPage />,
  children: [
    adminArticlesRoute,
    adminArticlesUpdateRoute,
    adminLoginRoute
  ]
};
