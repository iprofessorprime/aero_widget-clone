import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import sideMenuItems from "./SideMenuItems";
import '../sideMenu.css';

const renderMenuItems = (
  items,
  drawerOpen,
  expanded,
  handleChange,
  handleClick,
  anchorEl,
  handleClose,
  activeLink
) => {
  return items.map((item) => {
    if (item.type === "group") {
      return (
        <React.Fragment key={item.id}>
          {drawerOpen && (
            <p>{item.title}</p>
          )}
          {item.children && (
            <div className="menu-container">
              {renderMenuItems(item.children, drawerOpen, expanded, handleChange, handleClick, anchorEl, handleClose, activeLink)}
            </div>
          )}
        </React.Fragment>
      );
    }

    if (item.type === "menu") {
      return drawerOpen ? (
        <div>upcoming...</div>
      ) : (
        <div key={item.id}>
          upcomming..
        </div>
      );
    }
    if (item.type === "item") {
      return (
        <a href={item.url}>
          <div className="menu" key={item.id}>
          <div className="menu-img">
            <img width="12" height="12" src={item?.imgSrc} alt={item.alt} />
          </div>
          {drawerOpen && <div className="menu-name">
            <p>{item.title}</p>
          </div>}
        </div>
        </a>
      );
    }
    return null;
  });
};

const SideMenu = ({ drawerOpen }) => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation(); // Use this hook to get the current route
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname); // Update activeLink when the route changes
  }, [location]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menus">
      <div className="menu-container">
        {renderMenuItems(sideMenuItems, drawerOpen, expanded, handleChange, handleClick, anchorEl, handleClose, activeLink)}
      </div>
    </div>
  );
};

export default SideMenu;
