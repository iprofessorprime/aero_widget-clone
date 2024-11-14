import React from 'react';
import { Grid, GridItem } from '../../library'; // Import Grid from your library
import { useTheme } from 'aero-fantom';

const TestThemeProvider = ({ currentTheme }) => {
  const { colors, toggleTheme } = useTheme();
  const currentMode = colors.mode || 'light'; // Default to light if mode is not set

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
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: colors.primary[500],
          color: colors.text,
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Toggle to {colors.mode === 'light' ? 'dark' : 'light'} mode
      </button>

      <Grid spacing={3}>
        {/* Display primary colors */}
        {Object.entries(currentTheme.theme[currentMode].primary).map(([key, value]) =>
          renderColorBox(`Primary ${key}`, value)
        )}

        {/* Display secondary colors */}
        {Object.entries(currentTheme.theme[currentMode].secondary).map(([key, value]) =>
          renderColorBox(`Secondary ${key}`, value)
        )}
      </Grid>
    </div>
  );
};

export default TestThemeProvider;
