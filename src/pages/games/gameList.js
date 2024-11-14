import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ada1a1;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  position: relative;
  justify-content: center;
  background-color: #f9f9f920;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  overflow: hidden;
  transition: transform 0.3s ease; /* Add smooth transition for transform */
  
  &:hover {
    transform: scale(1.05); /* Scale the card on hover */
  }
`;

const GamesList = () => {
  const navigate = useNavigate();

  const gamesList = [
    {
      name: "Typing game",
      url: "/games/typing-game",
    },
    {
      name: "Racing game",
      url: "",
    },
  ];

  const handleGameClick = (url) => {
    if (!url) {
      toast.info("Coming Soon!");
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {gamesList.map((item, index) => (
          <Grid xs={6} key={index} onClick={() => handleGameClick(item.url)} style={{ cursor: 'pointer' }}>
            <Card>
              {item.name}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GamesList;
