import React from 'react';

import { Footer } from '../components/Footer';

interface LayoutProps extends React.PropsWithChildren {}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  ); 
}
