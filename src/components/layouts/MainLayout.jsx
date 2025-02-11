import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';

const MainLayout = ({ children }) => {
  return (
    <div class="app">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
