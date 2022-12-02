import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from './pages/ErrorPage';
import { Layout } from './pages/Layout';

import { mainRoute } from './pages/main/mainRoute';
import { meRoute } from './pages/me/meRoute';
import { articlesMainRoute, articlesIndividualRoute } from './pages/articles/articlesRoute';
import {
  adminArticlesRoute,
  adminArticlesEditRoute,
  adminLoginRoute
} from './pages/admin/adminRoute'


export const router = createBrowserRouter([
  {
    path: "/api",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      mainRoute,
      meRoute,
      articlesMainRoute,
      articlesIndividualRoute,
      adminArticlesRoute,
      adminArticlesEditRoute,
      adminLoginRoute
    ]
  }
]);
