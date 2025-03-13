import React from 'react';
import Header from '../common/Header';

const GameLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="container">{children}</main>
    </div>
  );
};
export default GameLayout;
