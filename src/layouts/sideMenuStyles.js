import styled from "styled-components";
import { theme } from "../themes/themeProvider";
// import { theme } from "../themes";

export const SidebarWrapper = styled.div`
  margin: 0;
  width: 100%;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  transition: 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.primary.main}50;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Sidenav = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 0.132);
  border-radius: 0px 20px 20px 0px;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  transition: all 0.9s;
`;

export const Headerw = styled.div`
  margin: auto;
  width: 100%;
  height: 75px;
  border-radius: 20px;
  display: flex;
`;

export const Profile = styled.div`
  margin: auto;
  margin-left: 10px;
  margin-right: -8px;
  width: 90%;
  height: 100%;
  display: flex;
`;

export const ProfilePic = styled.div`
  margin: auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;

  img {
    width: 30px;
    height: 30px;
    margin: auto;
    border-radius: 50%;
  }
`;

export const ProfileName = styled.div`
  margin: auto;
  margin-left: 0px;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;

  span {
    margin: auto;
    margin-left: 0px;
    margin-bottom: 0px;
    font-size: 7px;
  }

  p {
    margin: auto;
    margin-left: 0px;
    margin-top: 0px;
    font-size: small;
    font-weight: 600;
  }
`;

export const HeaderButton = styled.div`
  margin: auto;
  width: 10%;
  height: 60%;
  display: flex;

  .circle {
    margin: auto;
    margin-right: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%);
    display: flex;
    cursor: pointer;

    img {
      margin: auto;
      margin-left: 5px;
    }
  }
`;

export const Menus = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  p {
    width: 50%;
    height: 20px;
    margin-left: 15px;
    font-size: xx-small;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 0px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const GroupTitle = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  width: 90%;
  height: 50px;
  margin: auto;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${({ theme, activeLink }) => (activeLink ? theme.primary.main : "transparent")};
  box-shadow: ${({ activeLink }) => (activeLink ? "1px 1px 20px white" : "none")};
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.primary.shades[300]};
    box-shadow: 1px 1px 20px white;
    color: ${({ theme }) => theme.text};
  }

  .menu-img {
    margin: auto;
    display: flex;
    width: 20%;
    height: 100%;

    img {
      margin: auto;
    }
  }

  .menu-name {
    margin: auto;
    display: flex;
    width: 80%;
    height: 50%;

    p {
      height: fit-content;
      font-size: x-small;
      margin: auto;
      margin-left: 0px;
    }
  }
`;

export const Footer = styled.div`
  margin: auto;
  width: 100%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 20px;
  display: flex;

  .create-task {
    width: 90%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;

    img {
      margin: auto;
      margin-bottom: 0px;
      cursor: pointer;

      &:hover {
        filter: drop-shadow(1px 1px 15px #313131);
      }
    }

    p {
      font-size: x-small;
      margin: auto;
      margin-bottom: 0px;
    }

    span {
      font-size: 7px;
      margin: auto;
      margin-top: 0px;
    }
  }
`;

export const Disclaimer = styled.div`
  margin: auto;
  width: fit-content;
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: "Belanosima", sans-serif;

  a {
    text-decoration: none;
    color: #202020;
    font-family: "Kaushan Script", cursive;
    font-weight: 900;

    &:hover {
      text-decoration: overline;
    }
  }
`;

export const Service = styled.div`
  height: 30% !important;
`;
