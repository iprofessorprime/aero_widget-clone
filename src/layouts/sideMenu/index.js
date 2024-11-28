import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../sideMenu.css";
import DashboardRoutes from "../../routes/dashboardRoutes";
import MenuToggle from "./menuComponent/menuToggle";
import { GroupTitle, Menu, MenuContainer, Menus } from "../sideMenuStyles";
import DropdownMenu from "./components/dropdown";
import { useTheme } from "../../themes";
const renderMenuItems = (
  items,
  drawerOpen,
  expanded,
  handleChange,
  activeLink,
  theme
) => {
  return items.map((item) => {
    switch (item.type) {
      case "group":
        return (
          <React.Fragment key={item.id}>
            {drawerOpen && <GroupTitle>{item.title}</GroupTitle>}
            {item.children && (
              <MenuContainer>
                {renderMenuItems(
                  item.children,
                  drawerOpen,
                  expanded,
                  handleChange,
                  activeLink,
                  theme
                )}
              </MenuContainer>
            )}
          </React.Fragment>
        );
      case "item":
        return (
          <a href={item.path} key={item.id}>
            <Menu theme={theme} activeLink={activeLink === item.path}>
              <div className="menu-img">
              {/* <img width="12" height="12" src={item?.imgSrc} alt={item.alt || "icon"} /> */}
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25V11.75ZM5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75V10.25ZM12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75V10.25ZM19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25V11.75ZM11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11H11.75ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM6.25 11C6.25 10.5858 5.91421 10.25 5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11H6.25ZM20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25C19.0858 10.25 18.75 10.5858 18.75 11H20.25ZM4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75C5.91421 11.75 6.25 11.4142 6.25 11H4.75ZM12.5 5.75C12.9142 5.75 13.25 5.41421 13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25V5.75ZM18.75 11C18.75 11.4142 19.0858 11.75 19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11H18.75ZM12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75V4.25ZM12.5 10.25H5.5V11.75H12.5V10.25ZM12.5 11.75H19.5V10.25H12.5V11.75ZM13.25 11V5H11.75V11H13.25ZM4.75 11V15H6.25V11H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H15.5V18.25H9.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V11H18.75V15H20.25ZM6.25 11V9H4.75V11H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H12.5V4.25H9.5V5.75ZM20.25 11V9H18.75V11H20.25ZM20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25V5.75C17.2949 5.75 18.75 7.20507 18.75 9H20.25ZM15.5 4.25H12.5V5.75H15.5V4.25Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              {drawerOpen && (
                <div className="menu-name">
                  <p>{item.title}</p>
                </div>
              )}
            </Menu>
          </a>
        );
      case "menu":
        return (
          <MenuContainer>
            <MenuToggle
              key={item.id}
              title={item.title}
              drawerOpen={drawerOpen}
            >
              {renderMenuItems(
                item.children,
                drawerOpen,
                expanded,
                handleChange,
                activeLink,
                theme
              )}
            </MenuToggle>
          </MenuContainer>
        );
      case "dropdown":
        return (
          <DropdownMenu key={item.id} item={item} drawerOpen={drawerOpen}>
            {renderMenuItems(
              item.children,
              drawerOpen,
              expanded,
              handleChange,
              activeLink,
              theme
            )}
          </DropdownMenu>
        );
      default:
        return null;
    }
  });
};

const SideMenu = ({ drawerOpen }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const {theme} = useTheme()
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Menus>
      <MenuContainer>
        {renderMenuItems(
          DashboardRoutes.children,
          drawerOpen,
          expanded,
          handleChange,
          activeLink,
          theme
        )}
      </MenuContainer>
    </Menus>
  );
};

export default SideMenu;
