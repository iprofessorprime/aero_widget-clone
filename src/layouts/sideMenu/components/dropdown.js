import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Assuming React Router is used for navigation.

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 90%;
`;

const DropdownButton = styled.div`
  // background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  position: relative;
  width: 90%;
  color: white;

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 1px 1px 20px white;
    color: black;
  }
`;

const DropdownContent = styled.div`
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: absolute;
  top: 100%;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ArrowIcon = styled.span`
  transition: transform 0.3s;
  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const Submenu = styled.div`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #ccc;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const DropdownMenu = ({ item, drawerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const renderItems = (children) =>
    children.map((child) =>
      child.type === "item" ? (
        <StyledLink key={child.id} to={`/${item.path}/${child.path}`}>
          <DropdownItem>{child.title}</DropdownItem>
        </StyledLink>
      ) : null
    );

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {item.title}
        <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
      {isOpen && <DropdownContent>{renderItems(item.children)}</DropdownContent>}
      </DropdownButton>
    </DropdownWrapper>
  );
};

export default DropdownMenu;
