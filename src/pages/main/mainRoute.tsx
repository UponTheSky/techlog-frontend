import { RouteObject } from 'react-router-dom';
import { Main } from './Main';
import { fetchMainResponse } from '../../api/main';

export const mainRoute: RouteObject = {
  path: "main",
  element: <Main />,
}
