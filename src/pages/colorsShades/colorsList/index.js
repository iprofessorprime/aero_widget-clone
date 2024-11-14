import React from 'react';
import { Grid, GridItem } from '../../../library'; // Import Grid from your library
import { useTheme } from 'aero-fantom';
import { ThemeToggleButton } from '../../../components'

const CurrentColorsList = ({ currentTheme }) => {
  const { colors, toggleTheme } = useTheme();
  const currentMode = colors.mode || 'light';

  const renderColorBox = (colorName, colorValue) => (
    <GridItem xs={12} sm={6} md={4} key={colorName}>
      <div
        style={{
          backgroundColor: colorValue,
          padding: '20px',
          color: colors.text,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #ccc',
        }}
      >
        <span>{colorName}</span>
        <span>{colorValue}</span>
      </div>
    </GridItem>
  );

  if (!currentTheme || !currentTheme.theme || !currentTheme.theme[currentMode]) {
    return <div>No theme available</div>; // Fallback UI if theme is not found
  }
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, padding: '20px' }}>
      <ThemeToggleButton isDarkMode={currentMode === 'dark'} toggleTheme={toggleTheme} />

      <Grid spacing={3}>
        {Object.entries(currentTheme.theme[currentMode].primary).map(([key, value]) =>
          renderColorBox(`Primary ${key}`, value)
        )}

        {Object.entries(currentTheme.theme[currentMode].secondary).map(([key, value]) =>
          renderColorBox(`Secondary ${key}`, value)
        )}
      </Grid>
    </div>
  );
};

export default CurrentColorsList;
