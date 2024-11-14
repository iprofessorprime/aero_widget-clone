import React, { useState, useEffect } from 'react';
import Keyboard from './components/keyBoard';
import { toast } from 'react-toastify';
import { Button, ContentWrapper, CurrentWord, ErrorMessage, GameContainer, GameOverText, Input, PlayerName, PlayerTable, Select, Text, Title, WrapperTitleValue } from './styles';
import PlayersTable from './components/playersTable';

const TypingGame = () => {
  const categories = {
    vehicles: ['car', 'bike', 'truck', 'bus', 'plane'],
    birds: ['eagle', 'sparrow', 'parrot', 'penguin', 'owl'],
    fruits: ['apple', 'banana', 'cherry', 'mango', 'grape'],
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [typedText, setTypedText] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerList, setPlayerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
    setErrorMessage('');
  };

  const handleNameSelect = (player) => {
    setPlayerName(player.name);
    setSelectedCategory(player.category);
    setIsGameActive(true);
    startGame();
  };

  const handleStartGame = () => {
    if (playerName.trim() === '') {
      toast.error("Please enter your name before starting the game!");
      return;
    }
    startGame();
  };


  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTypedText('');
    setTimeLeft(30);
    setRandomWord();
  };

  const setRandomWord = () => {
    const wordList = categories[selectedCategory];

    if (wordList && wordList.length > 0) {
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      setCurrentWord(randomWord);
    } else {
      console.error('No words available for the selected category.');
    }
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

  useEffect(() => {
    if (timeLeft > 0 && isGameActive) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
      if (playerName) {
        savePlayerScore(playerName, score, selectedCategory);
      }
    }
  }, [timeLeft, isGameActive, score, selectedCategory]);

  const savePlayerScore = (name, score, category) => {
    const players = JSON.parse(localStorage.getItem('typingGame')) || [];
    const existingPlayerIndex = players.findIndex(player => player.name.toLowerCase() === name.toLowerCase());
    if (existingPlayerIndex !== -1) {
      if (players[existingPlayerIndex].score < score) {
        players[existingPlayerIndex].score = score;
      }
    } else {
      players.push({ name, score, category });
    }

    localStorage.setItem('typingGame', JSON.stringify(players));
    loadPlayerList();
    setPlayerName('');
    setErrorMessage('');
    setSelectedCategory('');
  };

  const loadPlayerList = () => {
    const players = JSON.parse(localStorage.getItem('typingGame')) || [];
    setPlayerList(players);
  };

  useEffect(() => {
    loadPlayerList();
  }, [selectedCategory]);

  return (
    <GameContainer>
      <ContentWrapper>
        {!isGameActive ? (
          <>
            <div>
              <Title>Please Select or Enter your name to start:</Title>
              <Input
                error={!!errorMessage}
                margin={`0px 0px 10px 0px`}
                type="text"
                value={playerName}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </div>

            {playerName && (
              <>
                <Select
                  value={selectedCategory}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                >
                  <option value="" disabled>Select a category</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="birds">Birds</option>
                  <option value="fruits">Fruits</option>
                </Select>
              </>
            )}
            <div>
              <Button onClick={handleStartGame} disabled={!playerName || !selectedCategory}>
                Start Games
              </Button>
            </div>
          </>
        ) : (
          <>
            <WrapperTitleValue>
              Player: <PlayerName>{playerName}</PlayerName>
            </WrapperTitleValue>
            <Text>Time Left: {timeLeft} seconds</Text>
            <Text>Score: {score}</Text>

            {isGameActive ? (
              <>
                <WrapperTitleValue>
                  <Title>Type the word:</Title>
                  <CurrentWord>{currentWord}</CurrentWord>
                </WrapperTitleValue>
                <Input
                  type="text"
                  value={typedText}
                  onChange={handleTyping}
                  placeholder="Start typing..."
                  autoFocus
                />
              </>
            ) : (
              <Button onClick={startGame} disabled={!playerName || !selectedCategory || errorMessage}>Start Game</Button>
            )}

            {!isGameActive && timeLeft === 0 && <GameOverText>Game Over! Final Score: {score}</GameOverText>}
          </>
        )}
      </ContentWrapper>

      {!isGameActive && (
        <PlayersTable
          playerList={playerList}
          handleNameSelect={handleNameSelect}
        />
      )}

      {isGameActive && (
        <Keyboard
          keyGroups={[
            'topLetterRow',
            'homeRow',
            'bottomLetterRow',
            'modifierRow',
          ]}
        />
      )}
    </GameContainer>
  );
};

export default TypingGame;
