import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://192.168.0.201:4000');

const LiveAudioBroadcast = () => {
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    const audioElement = document.getElementById('audioPlayer');
    setAudioPlayer(audioElement);

    socket.on('audio-broadcast', (audioData) => {
      const audioBlob = new Blob([audioData], { type: 'audio/wav' });
      const audioURL = URL.createObjectURL(audioBlob);
      audioPlayer.src = audioURL;
      audioPlayer.play();
    });

    socket.on('transcription', (transcription) => {
      console.log('Transcription:', transcription);
      // You can add logic here to display the transcription in the UI
    });
  }, [audioPlayer]);

  const startBroadcast = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
          if (recorder.state === 'inactive') {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const reader = new FileReader();
            reader.onload = () => {
              const audioBuffer = reader.result;
              socket.emit('audio', audioBuffer);
              setAudioChunks([]); // Reset the chunks
            };
            reader.readAsArrayBuffer(audioBlob);
          }
        }
      };

      recorder.start(1000); // Collect data every 1 second
      setMediaRecorder(recorder);
      console.log('Broadcast started');
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopBroadcast = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log('Broadcast stopped');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Box sx={{display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
      <button
        onClick={startBroadcast}
        style={{
          display: 'block',
          marginBottom: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Start Broadcast
      </button>
      <button
        onClick={stopBroadcast}
        style={{
          display: 'block',
          marginBottom: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Stop Broadcast
      </button>
      </Box>
      <audio id="audioPlayer" controls></audio>
    </div>
  );
};

export default LiveAudioBroadcast;
