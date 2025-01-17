import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
