import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-4 text-warning text-gradient">Játékok</h1>
      <p className="lead text-info">
      Merülj el érdekes játékainkban, amely segít növelni a reakcióidődet és különböző kihívásokkal szembesít.
      </p>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <Link className="" to="/games/trashgamepage">
              <div className="card bg-secondary text-white">
                <img
                  src="images/trashcan.png"
                  className="card-img-top"
                  alt="Reaction Game"
                />
                <div className="card-body">
                  <h5 className="card-title">Szemét Játék</h5>
                  <p className="card-text">
                    Dobd ki a zuhanó hulladékokat a megfelelő szelektív kukába mielött leesnének!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="col-md-6 mb-4">
            <Link className="" to="/games/memorygamepage">
              <div className="card bg-secondary text-white">
                <img
                  src="images/memory/image4.png"
                  className="card-img-top"
                  alt="Another Game"
                />
                <div className="card-body">
                  <h5 className="card-title">Memória játék</h5>
                  <p className="card-text">
                    Fejleszd memória képességed egy egyszerű memória játékkal!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Games;
