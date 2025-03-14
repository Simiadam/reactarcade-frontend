import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-4 text-warning text-gradient">
        Üdv a ReactArcade-ben!
      </h1>
      <p className="lead text-info">
        Helló! Kész vagy egy kis szórakozásra, miközben fejleszted a készségeidet? Merülj el érdekes játékainkban, amely segít növelni a reakcióidődet és különböző kihívásokkal szembesít.
      </p>
      <Link className="btn btn-primary" to="/games">
        Játékok
      </Link>
    </div>
  );
};

export default Home;
