import React, { useState, useEffect } from 'react';
import { myThemesColors } from './colors';
import { Grid2 } from '@mui/material';

const Themes = ({ onThemeChange }) => {
  const [currentTheme, setCurrentTheme] = useState(myThemesColors[0].theme); // Default to first theme
  const [isOpenThemeList, setIsOpenThemeList] = useState(false); // State to control theme list visibility

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const themeObj = myThemesColors.find((t) => t.name === savedTheme);
      if (themeObj) {
        setCurrentTheme(themeObj.theme);
        onThemeChange(themeObj); // Call prop to update theme
      }
    } else {
      onThemeChange(myThemesColors[0]); // Update on first load
    }
  }, [onThemeChange]);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme.theme);
    onThemeChange(theme); // Update in parent
    localStorage.setItem('theme', theme.name); // Save selected theme to localStorage
  };

  return (
    <div style={{ position: 'absolute', top: 0, right: 20 }}>
      <button onClick={() => setIsOpenThemeList(!isOpenThemeList)}>
        {isOpenThemeList ? 'Hide Themes' : 'Show Themes'}
      </button>
      <div style={{ position: 'absolute', width: '100%' }}>
        {isOpenThemeList && (
          <div style={{ backgroundColor: currentTheme.light.primary[500], }}>
            <Grid2 container spacing={2}>
              {myThemesColors.map((theme) => (
                <Grid2 size={6} key={theme.key}>
                  <div
                    onClick={() => handleThemeChange(theme)}
                    style={{ padding: '5px', backgroundColor: theme.theme.light.primary[500], color: '#fff', width: 25, height: 25, borderRadius: '50%' }}
                  />
                </Grid2>
              ))}
            </Grid2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Themes;
