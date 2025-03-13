import React, { useState } from 'react';
import MemoryGame from '../components/games/memorygame/MemoryGame';

const MemoryGamePage = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="memory-game-page">
      {!gameStarted ? (
        <div className="start-screen text-center">
          <h1 className="text-success">Memória Játék</h1>
          <p>Nyomd meg sorrendben a képeket!</p>
          <button className="btn btn-primary" onClick={handleStartGame}>
            Játék Indítása
          </button>
        </div>
      ) : (
        <MemoryGame />
      )}
    </div>
  );
};

export default MemoryGamePage;
