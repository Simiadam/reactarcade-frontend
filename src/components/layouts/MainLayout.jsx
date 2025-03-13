import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="app container">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
