import React, { useEffect, useState } from 'react';

const Card = ({ image, sound, onClick, isActive, isPlaying }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Kártya animálása amikor aktív lesz
  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  // Kártya kattintása
  const handleClick = () => {
    if (!isPlaying) {
      setIsAnimating(true);
      new Audio(sound).play();
      onClick();
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div
      className={`memory-card ${isAnimating ? 'animate' : ''}`}
      onClick={handleClick}
    >
      <img src={image} alt="card" className="img-fluid" />
    </div>
  );
};

export default Card;
