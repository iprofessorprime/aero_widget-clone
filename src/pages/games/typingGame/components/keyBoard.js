import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ada1a1;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const KeyboardRow = styled.div`
  display: flex;
  margin: 5px;
`;

const Key = styled.button`
  font-size: 1em;
  width: ${({ isWide }) => (isWide ? '100px' : '50px')};
  height: 50px;
  margin: 3px;
  border: 1px solid #ada1a1;
  border-radius: 5px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #4CAF50;
    color: white;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  `}
`;

function Keyboard({ keyGroups = [] }) {
  const [activeKey, setActiveKey] = useState(null);

  const keys = {
    functionRow: ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
    numberRow: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    topLetterRow: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    homeRow: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    bottomLetterRow: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
    modifierRow: ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl']
  };

  const handleKeyClick = (key) => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 200); // Deselect after 200ms
  };

  const handleKeyDown = (event) => {
    let key = event.key;
    // Normalize the key for alphabetic characters
    if (key.length === 1) {
      key = key.toUpperCase(); // This ensures both 'a' and 'A' are treated the same
    }

    if (Object.values(keys).flat().includes(key)) {
      setActiveKey(key); // Set active key on keydown
    }
  };

  const handleKeyUp = () => {
    setActiveKey(null); // Deselect key on keyup
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <KeyboardContainer>
      {keyGroups.includes('functionRow') && (
        <KeyboardRow>
          {keys.functionRow.map((key) => (
            <Key
              key={key}
              isWide={key === 'Backspace' || key === 'Enter' || key === 'CapsLock' || key === 'Shift' || key === 'Space'}
              isActive={activeKey === key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </Key>
          ))}
        </KeyboardRow>
      )}
      {keyGroups.includes('numberRow') && (
        <KeyboardRow>
          {keys.numberRow.map((key) => (
            <Key
              key={key}
              isWide={key === 'Backspace'}
              isActive={activeKey === key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </Key>
          ))}
        </KeyboardRow>
      )}
      {keyGroups.includes('topLetterRow') && (
        <KeyboardRow>
          {keys.topLetterRow.map((key) => (
            <Key
              key={key}
              isWide={key === 'Tab'}
              isActive={activeKey === key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </Key>
          ))}
        </KeyboardRow>
      )}
      {keyGroups.includes('homeRow') && (
        <KeyboardRow>
          {keys.homeRow.map((key) => (
            <Key
              key={key}
              isWide={key === 'CapsLock' || key === 'Enter'}
              isActive={activeKey === key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </Key>
          ))}
        </KeyboardRow>
      )}
      {keyGroups.includes('bottomLetterRow') && (
        <KeyboardRow>
          {keys.bottomLetterRow.map((key) => (
            <Key
              key={key}
              isWide={key === 'Shift'}
              isActive={activeKey === key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </Key>
          ))}
        </KeyboardRow>
      )}
      {keyGroups.includes('modifierRow') && (
        <KeyboardRow>
          {keys.modifierRow.map((key) => (
            <Key
              key={key}
              isWide={key === 'Space'}
              isActive={activeKey === key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </Key>
          ))}
        </KeyboardRow>
      )}
    </KeyboardContainer>
  );
}

export default Keyboard;
