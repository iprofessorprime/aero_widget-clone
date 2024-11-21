import styled from "styled-components";

export const MainCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ada1a1;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  position: relative;
  cursor: pointer;
  justify-content: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
export const MainCardTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* 50% transparent background */
  color: #fff;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;