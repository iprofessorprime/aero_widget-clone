const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { SpeechClient } = require('@google-cloud/speech');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Enable CORS for all origins
app.use(cors());

// Initialize Google Cloud Speech client
const speechClient = new SpeechClient();
const PORT = 4000;

// Audio configuration for Google Cloud Speech-to-Text
const requestConfig = {
  encoding: 'LINEAR16',
  sampleRateHertz: 16000,
  languageCode: 'en-US',
  interimResults: true,
};

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('audio', (audioData) => {
    console.log('Audio data received:', audioData.toString('base64').substring(0, 100)); // Log a snippet for inspection
    socket.broadcast.emit('audio-broadcast', audioData);
  
    const request = {
      config: requestConfig,
      audio: {
        content: audioData.toString('base64'),
      },
    };
  
    speechClient
      .streamingRecognize(request)
      .on('data', (response) => {
        const transcription = response.results
          .map((result) => result.alternatives[0].transcript)
          .join('\n');
        console.log('Transcription:', transcription);
        socket.emit('transcription', transcription);
      })
      .on('error', (error) => {
        console.error('Error transcribing audio:', error);
        socket.emit('error', 'Error transcribing audio');
      });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
