import React, { useEffect, useState } from "react";
import "./textToAudio.css";

const TextToAudio = () => {
  const [speakerCaption, setSpeakerCaption] = useState(
    "This is a sample speaker audio."
  );
  const [isListening, setIsListening] = useState(false);
  const recognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  useEffect(() => {
    if (!recognition) {
      alert("Speech Recognition API not supported in this browser");
      return;
    }

    const speechRecognition = new recognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = "en-US";

    const startRecognition = () => {
      speechRecognition.start();
      setIsListening(true);
    };

    const stopRecognition = () => {
      speechRecognition.stop();
      setIsListening(false);
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

  const playSpeakerCaption = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    speechSynthesis.speak(utterance);

    utterance.onend = () => {
      console.log("Audio playback ended.");
    };
  };

  return (
    <div className="translater-container">
      <h1>Text to Audio</h1>
      <div className="caption-container">
        <div className="caption speaker">
          <h2>Speaker Output</h2>
          <input
            type="text"
            className="inputBox"
            value={speakerCaption}
            onChange={(e) => setSpeakerCaption(e.target.value)}
            placeholder="Enter text to play as audio"
          />
        </div>
      </div>
      <button onClick={() => playSpeakerCaption(speakerCaption)}>
        Play Speaker Output
      </button>
    </div>
  );
};

export default TextToAudio;