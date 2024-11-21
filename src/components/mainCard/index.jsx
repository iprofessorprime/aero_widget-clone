import React from "react";
import { MainCardTitle, MainCardWrapper } from "./mainCardStyles";

const MainCard = ({data}) => {
  return (
      <MainCardWrapper backgroundImage={data?.backgroundImage}>
        <MainCardTitle>{data?.title}</MainCardTitle>
      </MainCardWrapper>
  );
};

export default MainCard;
