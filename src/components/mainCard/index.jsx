import React from "react";
import { MainCardTitle, MainCardWrapper } from "./mainCardStyles";

const MainCard = ({ data = {}, onClick, children, style, border = false, shadow = false, height }) => {
  return (
    <MainCardWrapper
      border={border}
      shadow={shadow}
      style={style}
      onClick={onClick}
      backgroundImage={data.backgroundImage}
      height={height}
    >
      {data.title && <MainCardTitle>{data.title}</MainCardTitle>}
      {children}
    </MainCardWrapper>
  );
};

export default MainCard;
