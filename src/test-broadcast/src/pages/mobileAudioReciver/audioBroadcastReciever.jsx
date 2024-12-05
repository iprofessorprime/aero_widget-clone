import React, { useEffect, useRef } from 'react'
import io from 'socket.io-client';
const socket = io('http://192.168.1.118:4000'); 

const AudioBroadcastReciever = () => {
  const audioRef = useRef(null);
  const audioChunks = useRef([]);

  useEffect(() => {
    // Listen for the 'audio' event from the server
    socket.on('audio', (audioData) => {
      // Append the received audio chunk to the audioChunks array
      audioChunks.current.push(audioData);

      // Create a Blob from the audio chunks
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const audioURL = URL.createObjectURL(audioBlob);
      if (audioRef.current) {
        audioRef.current.src = audioURL;
        audioRef.current.play();
      }
    });
    return () => {
      socket.off('audio');
      socket.off('new-message');
    };
  }, []);

  return (
    <div>
       <h1>Real-Time Audio Streaming</h1>
      <h2>Audio Player</h2>
      <audio ref={audioRef} controls autoPlay>
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioBroadcastReciever