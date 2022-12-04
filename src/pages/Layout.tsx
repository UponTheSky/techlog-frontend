import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';

export function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("main");    
  }, []);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  ); 
}
