import React from 'react';

const Home = () => {
  return (
    <div className="home-container text-white bg-dark min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-4 text-warning text-gradient">
        Welcome to ReactArcade!
      </h1>
      <p className="lead text-info">
        Hey there! Ready to have some fun while sharpening your skills? Dive
        into our awesome collection of games that will help you boost your
        reaction time, tackle some math challenges, and test your aim. Let’s
        get started!
      </p>
    </div>
  );
};

export default Home;
