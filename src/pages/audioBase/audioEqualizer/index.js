import React, { useRef, useEffect, useState } from "react";
import { ButtonsWrapper, ControllWrapper, EqualizerCanvas } from "./audioEqualizerStyles";

const AudioEqualizer = () => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null); // To store the AudioContext
  const analyserRef = useRef(null); // To store the AnalyserNode
  const mediaRecorderRef = useRef(null); // To store the MediaRecorder instance
  const [audioSource, setAudioSource] = useState(null); // Audio source (uploaded or recorded)
  const [isRecording, setIsRecording] = useState(false); // State to toggle recording

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");

    const draw = () => {
      if (analyserRef.current) {
        const analyser = analyserRef.current;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        canvasContext.fillStyle = "#000";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          canvasContext.fillStyle = `rgb(${barHeight + 100},50,150)`;
          canvasContext.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

          x += barWidth + 1;
        }
        requestAnimationFrame(draw);
      }
    };

    draw();
  }, []);

  const handlePlay = () => {
    if (!audioContextRef.current) {
      const audio = audioRef.current;

      // Create AudioContext and AnalyserNode once
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = context.createAnalyser();
      const source = context.createMediaElementSource(audio);

      source.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      audioContextRef.current = context;
      analyserRef.current = analyser;
    }

    audioRef.current.play();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setAudioSource(objectUrl);
    }
  };

  const handleStartAudioRecord = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    const audioChunks = [];
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks);
      const objectUrl = URL.createObjectURL(audioBlob);
      setAudioSource(objectUrl);
      setIsRecording(false);
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const handleStopAudioRecord = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div>
      <EqualizerCanvas ref={canvasRef} width="600" height="300" />
      <ControllWrapper>
        <audio ref={audioRef} controls src={audioSource}></audio>
      </ControllWrapper>
      <ButtonsWrapper>
        <button onClick={handlePlay} disabled={!audioSource}>
          Play Audio
        </button>
        {!isRecording ? (
          <button onClick={handleStartAudioRecord}>Start Recording</button>
        ) : (
          <button onClick={handleStopAudioRecord}>Stop Recording</button>
        )}
        <input type="file" accept="audio/*" onChange={handleFileUpload} />
      </ButtonsWrapper>
    </div>
  );
};

export default AudioEqualizer;
