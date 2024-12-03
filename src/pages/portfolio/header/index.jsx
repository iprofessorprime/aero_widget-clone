import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../themes";
import { PortfolioSkeleton } from "../components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => (theme ? `${theme.background}90` : "red")};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 0px !important;
`;

const PortfolioHeader = ({
  handleDrawerOpen,
  drawerOpen,
  isLoading = false,
}) => {
  const { theme, mode, toggleMode, switchTheme } = useTheme();
  return (
    <HeaderWrapper theme={theme}>
      {isLoading ? <PortfolioSkeleton mode={mode} style={{marginBottom:0}}  width="10%" /> : <Title>My Application</Title>}
      {isLoading ? <PortfolioSkeleton mode={mode} style={{marginBottom:0}}  width="20%" /> : <div>test</div>}
    </HeaderWrapper>
  );
};

export default PortfolioHeader;
