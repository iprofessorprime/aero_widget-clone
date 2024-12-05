import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline from link */
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.div`
  margin-top: 10px;
  color: #007bff;
  font-size: 14px;
`;

const AudioListPage = () => {
  const routes = [
    { path: "/audio/audio-reciever", title: "Audio Receiver" },
    { path: "/audio/audio-sender", title: "Audio Sender" },
    { path: "/audio/music-player", title: "Music Player" },
  ];

  return (
    <Container>
      {routes.map((route, index) => (
        <StyledLink key={index} to={route.path}>
          <Card>
            <Title>{route.title}</Title>
            <Description>Go to {route.title}</Description>
          </Card>
        </StyledLink>
      ))}
    </Container>
  );
};

export default AudioListPage;