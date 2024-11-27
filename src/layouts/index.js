import React, { useEffect, useState } from "react";
import { Box, Divider, IconButton, Drawer as MuiDrawer } from "@mui/material";
import { Outlet } from "react-router-dom";
import {  useTheme } from '@mui/material/styles';
import SideMenu from './sideMenu';
import Header from './header';
import useResponsive from "../utils/useResponsive";
import './sideMenu.css'
import { SidebarWrapper, Headerw, Profile, ProfilePic, HeaderButton, ProfileName} from "./sideMenuStyles";

const Layout = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const { isXs, isSm, isMd, isLg } = useResponsive()

  const handleDrawer = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    if (isXs) {
      setDrawerOpen(false)
    } else if (isSm) {
      setDrawerOpen(false)
    } else if (isMd) {
      setDrawerOpen(true)
    } else {
      setDrawerOpen(true)
    }
  }, [isSm, isXs, isMd, isLg]);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <Header /> */}
      <SidebarWrapper style={{ width: drawerOpen ? 240 : 60 }}>
        <div id="sidenav" className={`darksoul-sidenav ${drawerOpen ? "open" : "closed"}`}>
          <Headerw className="header">
            <Profile className="profile">
              <ProfilePic className="profile-pic">
                <img
                  src="https://darksoul-git.github.io/Blurred%20Side%20Navigation%20bar/darksoul.jpg"
                  alt="Profile Pic"
                />
              </ProfilePic>
              {drawerOpen && <ProfileName id="pname" className="profile-name">
                <span>Good Vibes✨</span>
                <p className="name">DarkSoul</p>
              </ProfileName>}
            </Profile>
            <HeaderButton className="btn">
              <div id="toggler" className="circle" onClick={handleDrawer}>
                <img
                  id="togglericon"
                  width="10"
                  height="10"
                  src="https://img.icons8.com/metro/26/back.png"
                  alt="back"
                />
              </div>
            </HeaderButton>
          </Headerw>
          <SideMenu drawerOpen={drawerOpen} />
        </div>
      </SidebarWrapper>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
