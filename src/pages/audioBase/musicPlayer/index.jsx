import React, { useState, useRef, useEffect } from "react";
import {
  AudioItem,
  AudioItemWrapper,
  AudioList,
  AudioListWrapper,
  AudioPageWrapper,
  AudioTrack,
  Button,
  VolumeTrack,
} from "./audioStyles";
import defaultAudio from "./assets/audioFiles/ShreeKrishnaGovindHareMurari.mp3";
import { pauseIcon, playIcon } from "./assets/indes";
import AudioUpload from "./audioUploader";
import MusicPlayerHeader from "./header";
import MusicPlayerSideMenu from "./sideMenu";

const MusicPlayer = () => {
  const [selectedFilesIndex, setSelectedFilesIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audioFiles, setAudioFiles] = useState([
    {
      url: defaultAudio,
      blob: null,
      volume: 1,
      isPlaying: false,
      name: "ShreeKrishnaGovindHareMurari.mp3",
      currentTime: 0,
      duration: 0,
    },
  ]);
  const audioRefs = useRef([]);
  const canvasRefs = useRef([]);
  const audioContextRef = useRef(null);
  const analyserNodesRef = useRef([]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Set up the audio context and analyzer node
  useEffect(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.AudioContext)();
    }

    audioFiles.forEach((audioFile, index) => {
      if (audioRefs.current[index] && !analyserNodesRef.current[index]) {
        const analyser = audioContextRef.current.createAnalyser();
        analyser.fftSize = 256;
        const source = audioContextRef.current.createMediaElementSource(
          audioRefs.current[index]
        );
        source.connect(analyser);
        analyser.connect(audioContextRef.current.destination);

        analyserNodesRef.current[index] = analyser;

        const canvas = canvasRefs.current[index];
        const canvasContext = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;

        function draw() {
          requestAnimationFrame(draw);
          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(dataArray);

          canvasContext.fillStyle = "#000";
          canvasContext.fillRect(0, 0, width, height);

          const barWidth = (width / dataArray.length) * 2.5;
          let x = 0;

          dataArray.forEach((item) => {
            const barHeight = item / 3;
            canvasContext.fillStyle = `rgb(${barHeight + 100}, 10, 50)`;
            canvasContext.fillRect(x, height - barHeight, barWidth, barHeight);
            x += barWidth + 1;
          });
        }

        draw();
      }
    });
  }, [audioFiles]);

  const handleTimeUpdate = (index, event) => {
    const audio = audioRefs.current[index];
    if (audio) {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      setAudioFiles((prevFiles) =>
        prevFiles.map((file, i) =>
          i === index
            ? { ...file, currentTime: currentTime, duration: duration }
            : file
        )
      );
    }
  };

  const handleVolumeChange = (index, event) => {
    const volume = event.target.value;
    setAudioFiles((prevFiles) =>
      prevFiles.map((file, i) =>
        i === index ? { ...file, volume: parseFloat(volume) } : file
      )
    );
  };

  const togglePlayPause = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      if (audio.paused) {
        audio.play();
        setAudioFiles((prevFiles) =>
          prevFiles.map((file, i) =>
            i === index ? { ...file, isPlaying: true } : file
          )
        );
      } else {
        audio.pause();
        setAudioFiles((prevFiles) =>
          prevFiles.map((file, i) =>
            i === index ? { ...file, isPlaying: false } : file
          )
        );
      }
    }
  };

  useEffect(() => {
    togglePlayPause(selectedFilesIndex);
  }, [selectedFilesIndex]);

  const playNext = () => {
    if (selectedFilesIndex < audioFiles.length - 1) {
      setSelectedFilesIndex((prev) => prev + 1);
    }
  };

  const playPrevious = () => {
    if (selectedFilesIndex > 0) {
      setSelectedFilesIndex((prev) => prev - 1);
    }
  };

  const onSelectAudio = (index) => {
    setSelectedFilesIndex(index);
    togglePlayPause(index);
  };
  const deleteAudio = (index, event) => {
    event.stopPropagation();
    setAudioFiles((files) => files.filter((_, i) => i !== index));
    if (selectedFilesIndex === index) {
      setSelectedFilesIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };
  const handleFileUpload = (file) => {
    const audioUrl = URL.createObjectURL(file);
    setAudioFiles((prevFiles) => [
      ...prevFiles,
      {
        url: audioUrl,
        blob: file,
        volume: 1,
        isPlaying: false,
        name: file.name,
        currentTime: 0,
        duration: 0,
      },
    ]);
  };
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <AudioPageWrapper>
      <MusicPlayerSideMenu
        audioFiles={audioFiles}
        onSelectAudio={onSelectAudio}
        deleteAudio={deleteAudio}
      />
      <AudioListWrapper>
        <MusicPlayerHeader setIsModalOpen={setIsModalOpen} />
        <AudioList>
          {audioFiles.map((audioFile, index) => (
            <AudioItemWrapper key={index}>
              {selectedFilesIndex == index && (
                <>
                  <div>
                    <audio
                      ref={(ref) => {
                        audioRefs.current[index] = ref;
                        if (ref) {
                          ref.volume = audioFile.volume;
                        }
                      }}
                      src={audioFile.url}
                      controls
                      onTimeUpdate={(event) => handleTimeUpdate(index, event)}
                    />
                    <canvas
                      ref={(canvas) => {
                        canvasRefs.current[index] = canvas;
                        if (canvas) {
                          canvas.width = 300;
                          canvas.height = 100;
                        }
                      }}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div style={{ fontSize: "10px" }}>{audioFile.name}</div>
                  <AudioItem>
                    <Button icon onClick={playPrevious}>
                      ⏮️
                    </Button>{" "}
                    {/* Previous emoji */}
                    <Button icon onClick={() => togglePlayPause(index)}>
                      {audioFile.isPlaying ? "⏸️" : "▶️"}
                    </Button>
                    <Button icon onClick={playNext}>
                      ⏭️
                    </Button>
                    <AudioTrack>
                      <span style={{ fontSize: "10px" }}>
                        {formatTime(audioFile.currentTime)} /{" "}
                        {formatTime(audioFile.duration)}
                      </span>
                      <input
                        type="range"
                        min="0"
                        max={audioFile.duration || 1}
                        step="0.1"
                        value={audioFile.currentTime}
                        onChange={(e) => {
                          const audio = audioRefs.current[index];
                          if (audio) {
                            audio.currentTime = e.target.value;
                            setAudioFiles((prevFiles) =>
                              prevFiles.map((file, i) =>
                                i === index
                                  ? { ...file, currentTime: audio.currentTime }
                                  : file
                              )
                            );
                          }
                        }}
                      />
                    </AudioTrack>
                    <VolumeTrack style={{ fontSize: "10px" }}>
                      Volume:
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={audioFile.volume}
                        onChange={(e) => handleVolumeChange(index, e)}
                      />
                    </VolumeTrack>
                    <Button icon onClick={()=>handleDownload(audioFile.url, audioFile.name)}>
                      📥
                    </Button>
                  </AudioItem>
                </>
              )}
            </AudioItemWrapper>
          ))}
        </AudioList>
      </AudioListWrapper>
      <AudioUpload
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFileUpload={handleFileUpload}
      />
    </AudioPageWrapper>
  );
};

export default MusicPlayer;
