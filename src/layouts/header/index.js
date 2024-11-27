import React from "react";
import styled from "styled-components";
import { useTheme, ThemeModeSwitcher } from "../../themes";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => `${theme.background}90`};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Header = ({ handleDrawerOpen, drawerOpen }) => {
  const { theme, mode, toggleMode, switchTheme } = useTheme(); 
  return (
    <HeaderWrapper theme={theme}>
      <Title>My Application</Title>
      <div>
        <ThemeModeSwitcher width={60} height={30} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
