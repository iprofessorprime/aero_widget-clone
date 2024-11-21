import React from "react";
import { MainCardTitle, MainCardWrapper } from "./mainCardStyles";

const MainCard = ({ data, onClick }) => {
  return (
    <MainCardWrapper onClick={onClick} backgroundImage={data?.backgroundImage}>
      <MainCardTitle>{data?.title}</MainCardTitle>
    </MainCardWrapper>
  );
};

export default MainCard;
