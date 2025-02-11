import React, { useState } from 'react';
import TrashGame from '../components/games/trashgame/TrashGame';

const TrashGamePage = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="trash-game-page">
      {!gameStarted ? (
        <div className="start-screen text-center">
          <h1 className="text-success">Szemét Játék</h1>
          <p>Dobd ki a műanyag és papírhulladékot a szelektív hulladékgyűjtő kukákba!</p>
          <p>
            Nyomd meg a <span className="text-info">bal nyilat</span> amikor{' '}
            <span className="text-info">múanyag hulladék</span> esik, és{' '}
            <span className="text-warning">jobb nyilat</span> amikor egy{' '}
            <span className="text-warning">papír hulladék</span> esik, hogy kidobjad!
          </p>
          <button className="btn btn-primary" onClick={handleStartGame}>
            Játék Indítása
          </button>
        </div>
      ) : (
        <TrashGame />
      )}
    </div>
  );
};

export default TrashGamePage;
