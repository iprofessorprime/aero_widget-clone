import React from "react";
import { useTheme } from "./themeProvider";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  background:green;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 1.5s ease;
  position: absolute;
  width: fit-content;
  height: fit-content;
  right:0;
  z-index:100;
`;

const Circle = styled.div`
  // position: absolute;
  width: 100%;
  aspect-ratio: 1;
  top: 5%;
  border-radius: 50%;
  transition: 1s;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0 0 10px ${({ isNight }) => (isNight ? "#f4f4f4" : "#ffd700")};
  ${({ isNight }) =>
    isNight
      ? "right: 2.8%; left: unset;"
      : "left: 2.8%; right: unset;"}
`;

const CloudBase = styled.div`
  background-color: white;
  border-radius: 50px;
  position: absolute;
  transition: 1s;
  width: ${({ width }) => `${width * 0.3}px`};
  height: ${({ height }) => `${height * 0.2}px`};
`;

const CloudOne = styled(CloudBase)`
  top: ${({ top }) => top || "20%"};
  right: ${({ right }) => right || "20%"};

  &::before {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 50%;
    height: 170%;
    bottom: -3%;
    left: 0%;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 50%;
    height: 164%;
    top: -100%;
    right: 5%;
  }
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const Star = styled.div`
  position: absolute;
  background-color: white;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  width: 3%;
  height: 3%;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: 1s;
  transform: ${({ isVisible }) => (isVisible ? "scale(1.5)" : "scale(1)")};
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${twinkle} 2s infinite;
    `}
`;

const SwitcherWrapper = styled.button`
  background: ${({ theme }) => theme.primary.main};
  // color: ${({ theme }) => theme.text};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border:none;
  padding: 0.5rem 1rem;
  // font-size: 1rem;
  // cursor: pointer;
  // margin: 0.5rem;
  &:hover {
    background: ${({ theme }) => theme.primary.shades[300]};
  }
`;

const ThemeSwitcher = ({ themesData, type = "circle" }) => {
  const { mode, theme, switchTheme } = useTheme();
  const isNight = mode === "dark";
const themeUI=null
  const getThemeUI = (themeItem) => {
    console.log(themeItem.theme[mode].primary.main,"themeItem",mode,themeItem)
    switch (type) {
      case "star":
        return <Star isVisible={isNight} />;
      case "cloud":
        return <CloudOne top="30%" right="10%" />;
      default:
        return <Circle height={200} isNight={isNight} backgroundColor={themeItem.theme[mode].background} />;
    }
  };

  return (
    <Container isNight={isNight}>
      {themesData.map((themeItem, index) => (
        <SwitcherWrapper
          key={index}
          onClick={() => switchTheme(themeItem.key)}
          theme={theme}
        >
          {getThemeUI(themeItem)}
        </SwitcherWrapper>
      ))}
    </Container>
  );
};

export default ThemeSwitcher;
