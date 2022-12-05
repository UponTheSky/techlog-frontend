import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("main");    
    }
  }, []);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  ); 
}
