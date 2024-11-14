import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: #fff;
  flex-direction: column;
`;

const Road = styled.div`
  position: relative;
  width: 480px;  // 6 lanes (480px width with 80px per lane)
  height: 600px;
  background-color: #333;
  overflow: hidden;
  border: 3px solid #555;
`;

const Car = styled.div`
  position: absolute;
  bottom: 10px;
  width: 40px;
  height: 80px;
  background-color: #00f;
  left: ${(props) => props.position * 80}px;  // Adjust for 6 lanes
  transition: left 0.1s ease;
`;

const Obstacle = styled.div`
  position: absolute;
  width: 40px;
  height: 80px;
  background-color: #f00;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left * 80}px;  // Adjust for 6 lanes
`;

const Score = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  font-size: 24px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  background-color: #00b300;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const RestartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #ff5500;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Leaderboard = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

const LeaderboardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #555;
`;

const CarRacingGame = () => {
  const [screenType, setScreenType] = useState('start');
  const [playerName, setPlayerName] = useState('');
  const [carPosition, setCarPosition] = useState(2); // Start in the middle (lane 2)
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [speed, setSpeed] = useState(100); // Initial speed (ms interval)
  const [lives, setLives] = useState(3); // Initialize lives

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem('carracing-scores')) || [];
    setLeaderboard(savedScores);
  }, []);

  const saveScore = (name, score) => {
    const newScores = [...leaderboard, { name, score }];
    newScores.sort((a, b) => b.score - a.score);
    const topScores = newScores.slice(0, 8); // Keep top 8 scores
    localStorage.setItem('carracing-scores', JSON.stringify(topScores));
    setLeaderboard(topScores);
  };

  const startGame = () => {
    setScore(0);
    setLives(3); // Reset lives when starting a new game
    setGameOver(false);
    setObstacles([]);
    setSpeed(100); // Reset speed when starting a new game
    setScreenType('game');
  };

  const restartGame = () => {
    setCarPosition(2); // Reset to the middle lane
    setScore(0);
    setLives(3); // Reset lives when restarting
    setGameOver(false);
    setObstacles([]);
    setSpeed(100); // Reset speed when restarting
    setScreenType('game');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (screenType !== 'game' || gameOver) return;

      if (e.key === 'ArrowLeft' && carPosition > 0) {
        setCarPosition(carPosition - 1); // Move left (1 step per lane)
      } else if (e.key === 'ArrowRight' && carPosition < 5) {
        setCarPosition(carPosition + 1); // Move right (1 step per lane)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [carPosition, screenType, gameOver]);

  useEffect(() => {
    if (screenType !== 'game' || gameOver) return;

    const interval = setInterval(() => {
      setObstacles((oldObstacles) => {
        const newObstacles = oldObstacles.map((obstacle) => ({
          ...obstacle,
          top: obstacle.top + 10,
        }));

        const filteredObstacles = newObstacles.filter((obstacle) => obstacle.top < 600);

        filteredObstacles.forEach((obstacle) => {
          if (obstacle.top >= 520 && obstacle.left === carPosition) {
            setLives((prevLives) => {
              const remainingLives = prevLives - 1;
              if (remainingLives === 0) {
                setGameOver(true);
                saveScore(playerName, score);
              }
              return remainingLives;
            });
          }
        });

        return filteredObstacles;
      });

      if (Math.random() > 0.9) {
        setObstacles((oldObstacles) => [
          ...oldObstacles,
          { top: 0, left: Math.floor(Math.random() * 6) }, // Random obstacle in one of 6 lanes
        ]);
      }

      setScore((prevScore) => prevScore + 1);

      // Increase speed gradually with score
      if (score % 10 === 0 && speed > 50) {
        setSpeed((prevSpeed) => prevSpeed - 5); // Decrease interval time for higher speed
      }
    }, speed);

    return () => clearInterval(interval);
  }, [carPosition, screenType, gameOver, score, speed, playerName, lives]);

  return (
    <GameContainer>
      {screenType === 'start' && (
        <div>
          <div>
            <h1>Enter Player Name</h1>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <StartButton onClick={startGame}>Start Game</StartButton>
          <Leaderboard>
            <h2>Leaderboard</h2>
            {leaderboard.map((player, index) => (
              <LeaderboardRow key={index}>
                <span>{player.name}</span>
                <span>{player.score}</span>
              </LeaderboardRow>
            ))}
          </Leaderboard>
        </div>
      )}

      {screenType === 'game' && (
        <Road>
          <Score>Score: {score}</Score>
          <Score>Lives: {lives}</Score>
          <Car position={carPosition} />
          {obstacles.map((obstacle, index) => (
            <Obstacle key={index} top={obstacle.top} left={obstacle.left} />
          ))}
          {gameOver && (
            <>
              <Score style={{ top: '50%', color: 'red' }}>
                Game Over - Press Restart to Play Again
              </Score>
              <RestartButton onClick={restartGame}>Restart</RestartButton>
            </>
          )}
        </Road>
      )}
    </GameContainer>
  );
};

export default CarRacingGame;
