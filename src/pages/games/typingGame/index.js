import React, { useState, useEffect } from 'react';
import Keyboard from './components/keyBoard';

const TypingGame = () => {
  const words = ['react', 'javascript', 'programming', 'typing', 'game'];
  const [currentWord, setCurrentWord] = useState('');
  const [typedText, setTypedText] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds to type
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTypedText('');
    setTimeLeft(30);
    setRandomWord();
  };

  const setRandomWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
  };

  const handleTyping = (e) => {
    const input = e.target.value;
    setTypedText(input);

    if (input.trim() === currentWord) {
      setScore((prevScore) => prevScore + 1);
      setTypedText('');
      setRandomWord();
    }
  };

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft > 0 && isGameActive) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }
  }, [timeLeft, isGameActive]);

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Typing Game</h1>
        <p>Time Left: {timeLeft} seconds</p>
        <p>Score: {score}</p>

        {isGameActive ? (
          <>
            <h2>Type the word:</h2>
            <h3>{currentWord}</h3>
            <input
              type="text"
              value={typedText}
              onChange={handleTyping}
              placeholder="Start typing..."
              autoFocus
            />
          </>
        ) : (
          <button onClick={startGame}>Start Game</button>
        )}

        {!isGameActive && timeLeft === 0 && <h2>Game Over! Final Score: {score}</h2>}
      </div>
      <Keyboard
        keyGroups={[
          // 'functionRow',
          // 'numberRow',
          'topLetterRow',
          'homeRow',
          'bottomLetterRow',
          'modifierRow'
        ]} />
    </div>
  );
};

export default TypingGame;
