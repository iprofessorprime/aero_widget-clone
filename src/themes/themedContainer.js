import React from "react";
import styled from "styled-components";
import { useTheme } from "./themeProvider";

const Container = styled.div`
  min-height: 100vh;
  background-image: ${({ theme }) => (theme.backgroundImage ? `url(${theme.backgroundImage})` : "none")};
  background-color: ${({ theme }) => theme.background};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${({ theme }) => theme.text};
  position: relative;
`;

const ThemedContainer = ({ children }) => {
  const { theme } = useTheme();

  return <Container theme={theme}>{children}</Container>;
};

export default ThemedContainer;
