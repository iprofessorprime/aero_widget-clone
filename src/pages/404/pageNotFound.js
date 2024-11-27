import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: black;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Modes = styled.div`
  color: white;
  padding: 10px;
  border: solid thin white;
  font-size: 10pt;
  float: left;
  margin: 10px;
  z-index: 2;
`;

const BoopText = styled.span`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  font-size: ${({ size }) => size}pt;
  color: ${({ color }) => color};
  animation: ${({ fade }) => (fade ? fadeIn : "none")} 0.15s ease-in-out;
  z-index: 2;
`;

const PageNotFound = () => {
  const [useFade, setUseFade] = useState(false);
  const [life, setLife] = useState(1000);
  const [messages, setMessages] = useState([]);
  const canvasRef = useRef(null);

  const randomMessage = () => {
    const messagesList = [
      "Oh No! 404",
      "404",
      "aw snap, wrong page",
      "404 error!",
      "We got lost!",
      "You're not supposed to be here!",
      "You're lost!",
      "Wrong page!",
      "404 - page not found",
      "not found!",
      "Whoops!",
    ];
    return messagesList[Math.floor(Math.random() * messagesList.length)];
  };

  const randomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  const randomSize = () => Math.floor(Math.random() * (60 - 5 + 1) + 5);
  const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const addMessage = () => {
    const id = `${randNum(0, 100)}-${randNum(0, 100)}`;
    const newMessage = {
      id,
      message: randomMessage(),
      color: randomColor(),
      size: randomSize(),
      top: randNum(0, 95),
      left: randNum(0, 95),
    };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }, life);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addMessage();
    }, 200);

    return () => clearInterval(interval);
  }, [life, useFade]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight;
    };
  
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  
    const lines = [];
    const maxLines = 40; // Maximum number of lines to keep on the canvas
  
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  
      // Draw all lines in the array
      lines.forEach(({ startX, startY, endX, endY, color }) => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = color;
        ctx.stroke();
      });
  
      // Add a new line
      const newLine = {
        startX: canvas.width / 2,
        startY: canvas.height / 2,
        endX: randNum(0, canvas.width),
        endY: randNum(0, canvas.height),
        color: randomColor(),
      };
      lines.push(newLine);
  
      // Remove the oldest line if we exceed the maxLines limit
      if (lines.length > maxLines) {
        lines.shift();
      }
  
      requestAnimationFrame(draw);
    };
  
    draw();
  
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  

  return (
    <>
      <GlobalStyle />
      <Modes>
        <label>
          <input
            type="checkbox"
            checked={useFade}
            onChange={(e) => setUseFade(e.target.checked)}
          />{" "}
          Use flashing text?
        </label>
        <br />
        <label>
          Text life:{" "}
          <input
            type="number"
            value={life}
            min="100"
            max="5000"
            step="100"
            onChange={(e) => setLife(Number(e.target.value))}
          />
        </label>
      </Modes>
      <Wrapper>
        {messages.map((msg) => (
          <BoopText
            key={msg.id}
            top={msg.top}
            left={msg.left}
            size={msg.size}
            color={msg.color}
            fade={useFade}
          >
            {msg.message}
          </BoopText>
        ))}
      </Wrapper>
      <canvas ref={canvasRef} />
    </>
  );
};

export default PageNotFound;
