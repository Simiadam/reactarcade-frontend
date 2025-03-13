import React, { useState, useEffect } from 'react';
import Card from './Card';
import GameOverScreen from './GameOverScreen';

const MemoryGame = () => {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [round, setRound] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const [gameState, setGameState] = useState(0);

  // Card-ok képei és hangjai
  const images = [
    '/images/memory/image1.png',
    '/images/memory/image2.png',
    '/images/memory/image3.png',
    '/images/memory/image4.png',
  ];
  const sounds = [
    '/sounds/memory/sound1.mp3',
    '/sounds/memory/sound2.mp3',
    '/sounds/memory/sound3.mp3',
    '/sounds/memory/sound4.mp3',
  ];

  useEffect(() => {
    setGameState(1);
  }, []);

  useEffect(() => {
    if (gameState === 0) {
      //console.log("GAME STATE 0:"+ gameState + ", sequence:"+sequence+", playerSequence:"+playerSequence+", isPlaying:"+isPlaying+", gameOver:"+gameOver);
    } else if (gameState === 1) {
      //console.log("GAME STATE 1 sequence kezdőérték:"+ gameState + ", sequence:"+sequence+", playerSequence:"+playerSequence+", isPlaying:"+isPlaying+", gameOver:"+gameOver);
      // Sequence első elemjének megadása, alapértékek beállítása majd -> gamestate 2
      setPlayerSequence([]);
      setRound(1);
      setScore(0);
      setGameOver(false);
      setSequence([Math.floor(Math.random() * 4)]);
      setGameState(2);
    } else if (gameState === 2) {
      //console.log("GAME STATE 2 sequence lejátsása:"+ gameState + ", sequence:"+sequence+", playerSequence:"+playerSequence+", isPlaying:"+isPlaying+", gameOver:"+gameOver);
      // Sequence lejátszása -> setIsPlaying(true)
      // ha oldal változik -> setGameState(10),
      // ha lejátszotta a sequence-et -> setGameState(3); setIsPlaying(false);
      setIsPlaying(true);
      setTimeout(() => {
        playSequence(sequence);
      }, 1000);
    } else if (gameState === 3) {
      //console.log("GAME STATE 3 sikeres sequence lejátszás:"+ gameState + ", sequence:"+sequence+", playerSequence:"+playerSequence+", isPlaying:"+isPlaying+", gameOver:"+gameOver);
      // Játékos tudja nyomni a kártyákat
      setIsPlaying(false);
    } else if (gameState === 4) {
      //console.log("GAME STATE 4 sikeres sequence megadás:"+ gameState + ", sequence:"+sequence+", playerSequence:"+playerSequence+", isPlaying:"+isPlaying+", gameOver:"+gameOver);
      // Ha sikeresen megadta a sequence-et
      setPlayerSequence([]);
      setRound(round + 1);
      setScore(score + 1);
      setTimeout(() => {
        new Audio('/sounds/bell.wav').play();
      }, 200);

      const newSequence = [...sequence, Math.floor(Math.random() * 4)];
      setSequence(newSequence);

      setGameState(2);
    } else if (gameState === 5) {
      //console.log("GAME STATE 5 rossz sequence megadás:"+ gameState + ", sequence:"+sequence+", playerSequence:"+playerSequence+", isPlaying:"+isPlaying+", gameOver:"+gameOver);
      // Ha elrontotta a sequence-et
      // Ha setGameOver(true) előjön az GameOverScreen ahol reset gombbal lehet resetGame()-t futtatni ami visszaállítja setGameState(1);
      setGameOver(true);
      setTimeout(() => {
        new Audio('/sounds/lose.wav').play();
      }, 200);
    }
  }, [gameState]);

  // Sequence lejátszása delay-el
  const playSequence = (seq) => {
    console.log('playSequence:' + seq);
    let i = 0;
    let oldlock = window.location.href;
    let waitloop = 0;
    let maxWaitloop = 2;
    const interval = setInterval(() => {
      // Ha elhagyják az oldalt fejezze be az intervalt
      if (oldlock != window.location.href) {
        setGameState(10);
        clearInterval(interval);
      } else {
        if (i < seq.length) {
          if (waitloop === 0) {
            setActiveCardIndex(100);
          } else if (waitloop === 1) {
            setActiveCardIndex(seq[i]);
            new Audio(sounds[seq[i]]).play();
          }

          waitloop++;

          if (waitloop > maxWaitloop) {
            waitloop = 0;
            i++;
          }
        } else {
          clearInterval(interval);
          setGameState(3);
          setIsPlaying(false);
          setActiveCardIndex(null);
          //console.log("End sequence interval");
        }
      }
    }, 350); // delay x maxwaitloop
  };

  // Játékos kattintás
  const handleCardClick = (index) => {
    if (!isPlaying) {
      setPlayerSequence([...playerSequence, index]);
    }
  };

  // Játékos sequence összehasonlítása és ellenőrzése
  useEffect(() => {
    if (playerSequence.length > 0) {
      // Ha nem egyezik meg a megadott sequence akkor -> setGameOver(true); setGameState(5);
      if (
        playerSequence[playerSequence.length - 1] !==
        sequence[playerSequence.length - 1]
      ) {
        setGameState(5);
      }
      // Ha sikerült a sequence megadása -> setPlayerSequence([]); setGameState(4);
      else if (playerSequence.length === sequence.length) {
        setGameState(4);
      }
    }
  }, [playerSequence]);

  // Játék állapot resetelése
  const resetGame = () => {
    setGameState(1);
  };

  return (
    <div className="memory-game gamecontainer text-center">
      <div className="position-absolute top-0 end-0 m-3">
        <h3>Pontszám {score}</h3>
      </div>
      <div className="cards row justify-content-center">
        {images.map((image, index) => (
          <div key={index} className={`col-6 mb-3`}>
            <Card
              image={image}
              sound={sounds[index]}
              onClick={() => handleCardClick(index)}
              isActive={activeCardIndex === index}
              isPlaying={isPlaying}
            />
          </div>
        ))}
      </div>
      {gameState === 5 && (
        <GameOverScreen score={score} onRestart={resetGame} />
      )}
    </div>
  );
};

export default MemoryGame;
