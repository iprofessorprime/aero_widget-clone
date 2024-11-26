import React, { useState } from 'react'
import styled from 'styled-components';
import { useTheme } from '../../../themes';
const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 1.5s ease;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Switch = styled.label`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ height }) => `${height / 2}px`};
  background: ${({ isNight }) =>
    isNight
      ? "linear-gradient(0deg, #1a1a2e 0%, #16213e 100%)"
      : "linear-gradient(0deg, #87ceeb 0%, #e0f6ff 100%)"};
  cursor: pointer;
  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  overflow: hidden;
  border: 0px solid ${({ theme }) => theme.background};
  transition: 1s;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 1s;
`;

const Circle = styled.div`
  position: absolute;
  width: ${({ height }) => `${height * 0.9}px`}; 
  aspect-ratio: 1;
  top: 5%;
  border-radius: 50%;
  transition: 1s;
  background: ${({ isNight }) =>
    isNight
      ? "radial-gradient(circle, #f4f4f4 30%, #e0e0e0 70%)"
      : "radial-gradient(circle, #ffd700 30%, #ffa500 70%)"};
  box-shadow: 0 0 10px ${({ isNight }) => (isNight ? "#f4f4f4" : "#ffd700")};
  ${({ isNight }) =>
    isNight ? "right: 2.8%;" : "left: 2.8%; transform: scale(1);"}
`;

const CloudBase = styled.div`
  background-color: white;
  border-radius: 50px;
  position: absolute;
  transition: 1s;
  opacity: ${({ isNight }) => (isNight ? "1" : "1")};
  width: ${({ width }) => `${width * 0.3}px`};
  height: ${({ height }) => `${height * 0.2}px`};
`;

const CloudOne = styled(CloudBase)`
  top: ${({ isNight }) => isNight ? '30%' : '30%'};
  right: ${({ isNight }) => isNight ? '50%' : '20%'};

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

const CloudTwo = styled(CloudBase)`
  top: ${({ isNight }) => isNight ? '60%' : '50%'};
  right: ${({ isNight }) => isNight ? '25%' : '50%'};

  &::before {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 55%;
    height: 189%;
    bottom: 3%;
    left: 1%;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 48%;
    height: 157%;
    bottom: 10%;
    right: 5%;
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
  ${({ isVisible }) => isVisible && "transform: scale(1.5);"}
`;
const SunMoonSwitch = ({ width = 200, height = 80 }) => {
  const [isNight, setIsNight] = useState(false);

  const toggleMode = () => {
    setIsNight((prev) => !prev);
  };
  return (
    <AppContainer isNight={isNight}>
    <SwitchContainer>
      <Switch width={width} height={height} isNight={isNight}>
        <input
          type="checkbox"
          id="toggleSwitch"
          onChange={toggleMode}
          style={{ display: "none" }}
        />
        <Slider>
          <Circle isNight={isNight} height={height} />
          <CloudOne isNight={isNight} width={width} height={height} />
          <CloudTwo isNight={isNight} width={width} height={height} />
          <Star isVisible={isNight} style={{ top: "20%", left: "50%" }} />
          <Star isVisible={isNight} style={{ top: "40%", right: "30%" }} />
          <Star isVisible={isNight} style={{ top: "60%", left: "10%" }} />
          <Star isVisible={isNight} style={{ top: "70%", left: "70%" }} />
        </Slider>
      </Switch>
    </SwitchContainer>
  </AppContainer>
  )
}

export default SunMoonSwitch