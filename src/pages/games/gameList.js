import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { carRacingCover, typingGameCover } from '../../assets';
import MainCard from '../../components/mainCard';

const GamesList = () => {
  const navigate = useNavigate();

  const gamesList = [
    {
      name: "Typing game",
      url: "/games/typing-game",
      image: typingGameCover,
    },
    {
      name: "Racing game",
      url: "/games/car-racing",
      image: carRacingCover,
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
          <Grid size={6} key={index} onClick={() => handleGameClick(item.url)} >
            <MainCard data={{backgroundImage:item.image,title:item.name}} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GamesList;
