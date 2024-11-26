import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../sideMenu.css';
import DashboardRoutes from "../../routes/dashboardRoutes";
import MenuToggle from './menuComponent/menuToggle'
import { GroupTitle, Menu, MenuContainer, Menus } from "../sideMenuStyles";
import DropdownMenu from "./components/dropdown";
const renderMenuItems = (items, drawerOpen, expanded, handleChange, activeLink) => {
  return items.map((item) => {
    switch (item.type) {
      case ("group"):
        return (
          <React.Fragment key={item.id}>
            {drawerOpen && <GroupTitle>{item.title}</GroupTitle>}
            {item.children && (
              <MenuContainer>
                {renderMenuItems(item.children, drawerOpen, expanded, handleChange, activeLink)}
              </MenuContainer>
            )}
          </React.Fragment>
        );
      case ("item"):
        return (
          <a href={item.path} key={item.id}>
            <Menu activeLink={activeLink === item.path}>
              <div className="menu-img">
                <img width="12" height="12" src={item?.imgSrc} alt={item.alt || "icon"} />
              </div>
              {drawerOpen && (
                <div className="menu-name">
                  <p>{item.title}</p>
                </div>
              )}
            </Menu>
          </a>
        );
      case ("menu"):
        return <MenuContainer>
          <MenuToggle key={item.id} title={item.title} drawerOpen={drawerOpen}>
            {renderMenuItems(item.children, drawerOpen, expanded, handleChange, activeLink)}
          </MenuToggle>
        </MenuContainer>
        case ("dropdown"):
          return <DropdownMenu key={item.id} item={item} drawerOpen={drawerOpen}>
              {renderMenuItems(item.children, drawerOpen, expanded, handleChange, activeLink)}
            </DropdownMenu>
      default:
        return null
    }
  });
};

const SideMenu = ({ drawerOpen }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Menus >
      <MenuContainer>
        {renderMenuItems(DashboardRoutes.children, drawerOpen, expanded, handleChange, activeLink)}
      </MenuContainer>
    </Menus>
  );
};

export default SideMenu;
