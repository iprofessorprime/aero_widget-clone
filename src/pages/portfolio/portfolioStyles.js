import styled from 'styled-components';

// Container styled component
export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw; 
  overflow: hidden;
  background-color: #424242;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background: linear-gradient(to right, #304352 0%, #304352 100%);
`;

export const Container = styled.div`
  font-family: 'Arial, sans-serif';
  background-color: transparent;
  padding: 10px;
  color: #FFFFFF;
  height: 90%;
  width: 70%;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
         rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
         rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: 1px solid #ada1a1;
`;
export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

