import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box } from "@mui/material";
import TranscriptionDisplay from "./TranscriptionDisplay";

const socket = io("http://192.168.0.201:4000");

const LiveAudioBroadcast = () => {
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [transcription, setTranscription] = useState("");

  useEffect(() => {
    const audioElement = document.getElementById("audioPlayer");
    if (!audioElement) {
      console.error("Audio element not found");
      return;
    }
    setAudioPlayer(audioElement);

    socket.on("audio-broadcast", (audioData) => {
      console.log("Received audio data for playback");
      const audioBlob = new Blob([audioData], { type: "audio/wav" });
      const audioURL = URL.createObjectURL(audioBlob);
      
      if (!audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    
      audioElement.src = audioURL;
      audioElement.load();
      audioElement.play().catch((error) => {
        console.error("Playback error:", error);
      });
    });
    
    socket.on("transcription", (newTranscription) => {
      console.log("Received transcription:", newTranscription);
      setTranscription(newTranscription);
    });
    

    return () => {
      socket.off("audio-broadcast");
      socket.off("transcription");
    };
  }, [audioPlayer]);

  const startBroadcast = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const reader = new FileReader();
        reader.onload = () => {
          const audioBuffer = reader.result;
          socket.emit("audio", audioBuffer);
          setAudioChunks([]);
        };
        reader.readAsArrayBuffer(audioBlob);
      };

      recorder.start(1000);
      setMediaRecorder(recorder);
      console.log("Broadcast started");
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopBroadcast = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log("Broadcast stopped");
    }
  };
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={() => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
              stopBroadcast();
            } else {
              startBroadcast();
            }
          }}
          style={{
            border: `1px solid ${
              mediaRecorder && mediaRecorder.state === "recording"
                ? "red"
                : "green"
            }`,
          }}
          className="audio-broadcast-button"
        >
          {mediaRecorder && mediaRecorder.state === "recording" ? "🔴" : "🟢"}
        </button>
      </Box>
      <audio id="audioPlayer" controls></audio>
      <TranscriptionDisplay transcription={transcription} />
    </div>
  );
};

export default LiveAudioBroadcast;
