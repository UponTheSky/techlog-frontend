import React from 'react';
import { RouteObject } from 'react-router-dom';

import { MePage } from './Me';

export const meRoute: RouteObject = {
  path: "me",
  element: <MePage />
}
