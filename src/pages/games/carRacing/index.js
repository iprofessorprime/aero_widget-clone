import React, { useState, useEffect } from 'react';
import {
  GameContainer,
  Input,
  Obstacle,
  OptionButtons,
  RestartButton,
  Road,
  Score,
  StartButton,
} from './styles';
import PlayersTable from './playersTable';

const CarRacingGame = () => {
  const [screenType, setScreenType] = useState('start');
  const [playerName, setPlayerName] = useState('');
  const [carPosition, setCarPosition] = useState(2);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [lives, setLives] = useState(3);
  const [playerList, setPlayerList] = useState([]);

  // Load player scores from local storage on mount
  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('aero-games')) || [];
    setPlayerList(savedScores);
  }, []);

  const savePlayerScore = (name, score, category = 'carRacing') => {
    const newScores = [...playerList, { name, score, category }];
    newScores.sort((a, b) => b.score - a.score);
    const topScores = newScores.slice(0, 8);
    localStorage.setItem('aero-games', JSON.stringify(topScores));
    setPlayerList(topScores);
  };

  const startGame = () => {
    setScore(0);
    setLives(3);
    setGameOver(false);
    setObstacles([]);
    setSpeed(100);
    setScreenType('game');
  };

  const restartGame = () => {
    startGame();
    setCarPosition(2);
  };

  // Handle car movement with keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (screenType !== 'game' || gameOver) return;

      if (e.key === 'ArrowLeft' && carPosition > 0) {
        setCarPosition((prev) => prev - 1);
      } else if (e.key === 'ArrowRight' && carPosition < 5) {
        setCarPosition((prev) => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [carPosition, screenType, gameOver]);

  // Handle obstacles and game logic
  useEffect(() => {
    if (screenType !== 'game' || gameOver) return;

    const interval = setInterval(() => {
      setObstacles((oldObstacles) =>
        oldObstacles
          .map((obstacle) => ({ ...obstacle, top: obstacle.top + 10 }))
          .filter((obstacle) => obstacle.top < 600)
      );

      setObstacles((oldObstacles) => {
        if (Math.random() > 0.9) {
          return [...oldObstacles, { top: 0, left: Math.floor(Math.random() * 6) }];
        }
        return oldObstacles;
      });

      setScore((prev) => prev + 1);

      if (score % 10 === 0 && speed > 50) {
        setSpeed((prev) => prev - 5);
      }

      obstacles.forEach((obstacle) => {
        if (obstacle.top >= 520 && obstacle.left === carPosition) {
          setLives((prev) => {
            const remainingLives = prev - 1;
            if (remainingLives === 0) {
              setGameOver(true);
              savePlayerScore(playerName, score);
            }
            return remainingLives;
          });
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [carPosition, screenType, gameOver, score, speed, playerName, obstacles]);

  return (
    <GameContainer>
      {screenType === 'start' && (
        <div>
          <div style={{ textAlign: 'center' }}>
            <h1>Enter Player Name</h1>
            <Input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <StartButton onClick={startGame}>Start Game</StartButton>
          </div>
          <PlayersTable playerList={playerList} handleNameSelect={(player) => {
            setPlayerName(player.name);
            startGame();
          }} />
        </div>
      )}

      {screenType === 'game' && (
        <Road>
          <Score>Score: {score}</Score>
          <Score>Lives: {lives}</Score>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {obstacles.map((obstacle, index) => (
              <Obstacle key={index} top={obstacle.top} left={obstacle.left} />
            ))}
          </div>
          {gameOver && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Score style={{ color: 'red' }}>Game Over</Score>
              <OptionButtons>
                <RestartButton onClick={restartGame}>Restart</RestartButton>
                <div
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => setScreenType('start')}
                >
                  Back to Home
                </div>
              </OptionButtons>
            </div>
          )}
        </Road>
      )}
    </GameContainer>
  );
};

export default CarRacingGame;
