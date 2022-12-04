import React, { useEffect, useReducer } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { tokenReducer, TokenContext, TokenDispatchContext } from './adminContext'; 

export function AdminMainPage() {
  const [token, dispatch] = useReducer(tokenReducer, null);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('articles');
  }, []);

  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={dispatch}>
        <Outlet />
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  );
}
