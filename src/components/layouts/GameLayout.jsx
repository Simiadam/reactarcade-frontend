import React from 'react';
import Header from '../common/header';

const GameLayout = ({ children }) => {
  return (
    <div class="app">
      <Header />
      <main className="container">{children}</main>
    </div>
  );
};
export default GameLayout;
