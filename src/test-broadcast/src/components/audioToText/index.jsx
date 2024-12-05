import React, { useEffect, useState } from 'react';
import './audioToText.css';

const AudioToText = () => {
  const [micCaption, setMicCaption] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  useEffect(() => {
    if (!recognition) {
      alert('Speech Recognition API not supported in this browser');
      return;
    }

    const speechRecognition = new recognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';

    const startRecognition = () => {
      speechRecognition.start();
      setIsListening(true);
    };

    const stopRecognition = () => {
      speechRecognition.stop();
      setIsListening(false);
    };

    speechRecognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setMicCaption(transcript);
    };

    speechRecognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };

    if (isListening) {
      startRecognition();
    } else {
      stopRecognition();
    }

    return () => {
      stopRecognition();
    };
  }, [isListening, recognition]);

  const toggleListening = () => {
    setIsListening((prev) => !prev);
  };

  return (
    <div className="translater-container">
      <h1>Audio To Text</h1>
      <div className="caption-container">
        <div className="caption mic">
          <h2>Mic Input</h2>
          <p>{micCaption || 'Listening...'}</p>
        </div>
      </div>
      <button onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
    </div>
  );
};

export default AudioToText;
