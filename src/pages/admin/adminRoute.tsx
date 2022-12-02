import React from 'react';
import { RouteObject } from 'react-router-dom';
import { AdminArticlesPage } from './Admin.articles';
import { AdminArticlesEditPage } from './Admin.articles.edit';
import { AdminLoginPage } from './Admin.login';

export const adminArticlesRoute: RouteObject = {
  path: 'admin/articles',
  element: <AdminArticlesPage />
};

export const adminArticlesEditRoute: RouteObject = {
  path: 'admin/articles/:articlesId',
  element: <AdminArticlesEditPage />
};

export const adminLoginRoute: RouteObject = {
  path: 'admin/login',
  element: <AdminLoginPage />
};
