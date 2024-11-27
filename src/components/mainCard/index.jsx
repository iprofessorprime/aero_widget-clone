import React from "react";
import { MainCardTitle, MainCardWrapper } from "./mainCardStyles";

const MainCard = ({ data, onClick, children }) => {
  return (
    <MainCardWrapper onClick={onClick} backgroundImage={data?.backgroundImage}>
      <MainCardTitle>{data?.title}</MainCardTitle>
      {children}
    </MainCardWrapper>
  );
};

export default MainCard;
