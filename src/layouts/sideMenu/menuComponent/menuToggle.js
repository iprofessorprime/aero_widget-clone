import React, { useState } from "react";
import styled from "styled-components";
import { GroupTitle } from "../../sideMenuStyles";

const MenuToggleContainer = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: white;
  width: 90%;
`;

const MenuTitle = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const MenuArrow = styled.div`
  font-size: 14px;
  transition: transform 0.3s;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const MenuChildren = styled.div`
  margin-left: 15px;
  width: 100%;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const MenuToggle = ({ title, children, drawerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuToggleContainer>
      <MenuHeader onClick={toggleMenu}>
        <MenuTitle>{title}</MenuTitle>
        <MenuArrow isOpen={isOpen}>▼</MenuArrow>
      </MenuHeader>
      <MenuChildren isOpen={isOpen}>{children}</MenuChildren>
    </MenuToggleContainer>
  );
};

export default MenuToggle;
