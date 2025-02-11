import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-4 text-warning text-gradient">Játékok</h1>
      <p className="lead text-info">
      Merülj el érdekes játékainkban, amely segít növelni a reakcióidődet és különböző kihívásokkal szembesít.
      </p>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
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
                <Link className="btn btn-success" to="/games/trashgamepage">
                  Játék Indítása
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-secondary text-white">
              <img
                src="images/sdcard.png"
                className="card-img-top"
                alt="Another Game"
              />
              <div className="card-body">
                <h5 className="card-title">Memória játék</h5>
                <p className="card-text">
                  Fejleszd memória képességed egy egyszerű memória játékkal!
                </p>
                <button
                  className="btn btn-primary"
                >
                  Játék Indítása
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
