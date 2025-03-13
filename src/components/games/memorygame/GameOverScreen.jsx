import React from 'react';

const GameOverScreen = ({ score, onRestart }) => {
  return (
    <div
      className="game-over-screen position-absolute top-50 start-50 translate-middle text-center bg-dark px-5 py-3 border border-3 border-warning rounded"
      style={{ zIndex: 1000 }}
    >
      <h2 className="text-warning">Játék Vége</h2>
      <h3>Pontszám: {score}</h3>
      <h3 className="text-info">Rekord pontszám: {score}</h3>
      <button className="btn btn-primary mt-3" onClick={onRestart}>
        Újra
      </button>
    </div>
  );
};

export default GameOverScreen;
