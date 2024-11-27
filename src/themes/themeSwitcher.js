import React, { useState } from "react";
import { useTheme } from "./themeProvider";
import styled, { css, keyframes } from "styled-components";
import MainCard from "../components/mainCard";

const Container = styled.div`
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
  right: 0;
  z-index: 100;
  top: 20%;
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const shining = keyframes`
  0% {
    left: -80px;
  }
  40% {
    left: 150px;
  }
  100% {
    left: 150px;
  }
`;

const bubbleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
    10% {
    transform: scale(1.1);
  }
    30% {
    transform: scale(1.12);
  }
  50% {
    transform: scale(1.1);
  }
    80% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;


const Circle = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: 1s;
  background-color: ${({ themeColor }) => themeColor || "transparent"};
  box-shadow: 0 0 10px ${({ isNight }) => (isNight ? "#f4f4f4" : "#ffd700")};
`;

const CloudBase = styled.div`
  background-color: ${({ themeColor }) => themeColor || "white"};
  border-radius: 30%;
  position: relative;
  transition: 1s;
  width: 100%;
  height: 25%;
  animation: ${bubbleAnimation} 2s 1;
`;

const CloudOne = styled(CloudBase)`
  top: ${({ top }) => top || "20%"};
  right: ${({ right }) => right || "20%"};

  &::before {
    content: "";
    position: absolute;
    background-color: ${({ themeColor }) => themeColor || "white"};
    border-radius: 50%;
    width: 70%;
    height: 264%;
    bottom: 3%;
    left: -17%;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ themeColor }) => themeColor || "white"};
    border-radius: 50%;
    width: 88%;
    height: 312%;
    bottom: 0%;
    right: -18%;
  }
`;

const Star = styled.div`
  position: relative;
  background-color: ${({ themeColor }) => themeColor || "white"};
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
  width: 100%;
  height: 100%;
  transition: 1s;
  // animation: ${twinkle} 2s infinite;
`;

const SwitcherWrapper = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  margin: 0.5rem;
`;

const SettingButton = styled.button`
  background: transparent;
  color: ${({ themeColor }) => themeColor || "white"};
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 2s linear infinite; 

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Shine = styled.div`
  position: absolute;
  height: 250%;
  width: 40px;
  top: 0;
  left: -60px;
  background: linear-gradient(90deg, #ffffff00, #ffffff54, #ffffff00);
  transform: rotate(45deg) translateY(-35%);
  animation: ${shining} 2s ease ${({ repeat = "infinite" }) => repeat};
`;
const ThemeSwitcher = ({ themesData, type = "cloud" }) => {
  const [openThemeOption, setOpenThemeOption] = useState(false);
  const { mode, theme, switchTheme } = useTheme();
  const isNight = mode === "dark";

  const getThemeUI = (themeItem) => {
    const themeColor = themeItem.theme[mode]?.primary.main || "transparent";

    switch (type) {
      case "star":
        return <Star isVisible={isNight} themeColor={themeColor} ><Shine /></Star>;
      case "cloud":
        return <CloudOne top="30%" right="10%" themeColor={themeColor}><Shine /></CloudOne>;
      default:
        return <Circle isNight={isNight} themeColor={themeColor} ><Shine /></Circle>;
    }
  };

  const handleOpenSetting = () => {
    setOpenThemeOption(!openThemeOption);
  };

  const cardStyle = {
    position: "absolute",
    right: "100%",
    top: 0,
    marginTop: 0,
    height: 'fit-content',
    width: 'fit-content',
    padding: '0 10px'
  };

  return (
    <Container>
      <SettingButton onClick={handleOpenSetting}>⚙️</SettingButton>
      {openThemeOption && (
        <MainCard style={cardStyle}>
          <Shine repeat="2" />
          {themesData.map((themeItem, index) => (
            <SwitcherWrapper
              key={index}
              onClick={() => {
                switchTheme(themeItem.key);
                handleOpenSetting();
              }}
            >
              {getThemeUI(themeItem)}
            </SwitcherWrapper>
          ))}
        </MainCard>
      )}
    </Container>
  );
};

export default ThemeSwitcher;
