import React from "react";
import { MainCardTitle, MainCardWrapper } from "./mainCardStyles";

const MainCard = ({ data, onClick, children, style }) => {
  return (
    <MainCardWrapper style={style} onClick={onClick} backgroundImage={data?.backgroundImage}>
      {data?.title&&<MainCardTitle>{data?.title}</MainCardTitle>}
      {children}
    </MainCardWrapper>
  );
};

export default MainCard;
