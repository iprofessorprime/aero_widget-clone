import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: #fff;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 10px;
  margin: ${(props) => props?.margin || '5px 0'};
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${(props) => props?.error ? 'red' : '#ccc'};
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:focus {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-color: #4d90fe;
  }
`;
export const Road = styled.div`
  position: relative;
  width: 480px;  // 6 lanes (480px width with 80px per lane)
  height: 600px;
  background-color: #333;
  overflow: hidden;
  border: 3px solid #555;
`;

export const Car = styled.div`
  position: absolute;
  bottom: 10px;
  width: 40px;
  height: 80px;
  background-color: #00f;
  left: ${(props) => props.position * 80}px;  // Adjust for 6 lanes
  transition: left 0.1s ease;
`;

export const Obstacle = styled.div`
  position: absolute;
  width: 40px;
  height: 80px;
  background-color: #f00;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left * 80}px;  // Adjust for 6 lanes
`;

export const Score = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  font-size: 24px;
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  background-color: #00b300;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;
export const OptionButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #ff5500;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const RestartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #ff5500;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Leaderboard = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

export const LeaderboardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #555;
`;