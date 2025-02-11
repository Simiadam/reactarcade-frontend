import React, { useState, useEffect, useRef } from 'react';
import GameOverScreen from './GameOverScreen';
import Bins from './Bins';
import Trash from './Trash';

const TRASH_TYPES = ['plastic', 'paper'];
const INITIAL_TRASH_SPEED = 1.0;
const INITIAL_SPAWN_INTERVAL = 700;
const SPEED_INCREMENT = 0.003;
const SPAWN_DECREMENT = 5;

const TrashGame = () => {
  const [trash, setTrash] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [growingBin, setGrowingBin] = useState(null);
  const trashSpeed = useRef(INITIAL_TRASH_SPEED);
  const spawnInterval = useRef(INITIAL_SPAWN_INTERVAL);
  const gameContainerRef = useRef(null);
  const intervalRef = useRef(null);

  // Spawn trash at intervals
  useEffect(() => {
    if (gameOver) return;

    const spawnTrash = () => {
      if (!gameContainerRef.current) return;

      const containerWidth = gameContainerRef.current.offsetWidth;
      const randomOffset = (Math.random() - 0.5) * 100;
      const x = containerWidth / 2 - 25 + randomOffset;

      const newTrash = {
        id: Math.random(),
        type: TRASH_TYPES[Math.floor(Math.random() * TRASH_TYPES.length)],
        x: x,
        y: 0,
      };
      setTrash((prev) => [...prev, newTrash]);

      spawnInterval.current = Math.max(
        100,
        spawnInterval.current - SPAWN_DECREMENT
      );
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(spawnTrash, spawnInterval.current);
    };

    intervalRef.current = setInterval(spawnTrash, spawnInterval.current);
    return () => clearInterval(intervalRef.current);
  }, [gameOver]);

  // Move trash down the screen
  useEffect(() => {
    if (gameOver) return;

    const moveTrash = () => {
      setTrash((prev) =>
        prev.map((t) => ({
          ...t,
          y: t.y + trashSpeed.current,
        }))
      );

      trashSpeed.current += SPEED_INCREMENT;

      const trashReachedBottom = trash.some(
        (t) => t.y > window.innerHeight - 100
      );
      if (trashReachedBottom) {
        setGameOver(true);
      }
    };

    const animationFrame = requestAnimationFrame(moveTrash);
    return () => cancelAnimationFrame(animationFrame);
  }, [trash, gameOver]);

  // Handle trash sorting (keyboard or click)
  const handleTrash = (direction) => {
    const lowestTrash = trash.reduce(
      (lowest, current) => (current.y > lowest.y ? current : lowest),
      { y: -Infinity }
    );

    if (lowestTrash.type !== direction) {
      setGameOver(true);
      return;
    }

    setTrash((prev) => prev.filter((t) => t.id !== lowestTrash.id));
    setScore((prev) => prev + 1);

    setGrowingBin(direction);
    setTimeout(() => setGrowingBin(null), 300);
  };

  // Handle keyboard events
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const direction = e.key === 'ArrowLeft' ? 'plastic' : 'paper';
      handleTrash(direction);
    }
  };

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [trash, gameOver]);

  // Restart the game
  const restartGame = () => {
    setGameOver(false);
    setTrash([]);
    setScore(0);
    trashSpeed.current = INITIAL_TRASH_SPEED;
    spawnInterval.current = INITIAL_SPAWN_INTERVAL;
  };

  return (
    <div className="gamecontainer" ref={gameContainerRef}>
      <div className="position-absolute top-0 end-0 m-3">
        <h3>Pontszám {score}</h3>
      </div>

      {gameOver && <GameOverScreen score={score} onRestart={restartGame} />}

      <Bins growingBin={growingBin} onHandleTrash={handleTrash} />

      {trash.map((t) => (
        <Trash key={t.id} type={t.type} x={t.x} y={t.y} />
      ))}
    </div>
  );
};

export default TrashGame;
