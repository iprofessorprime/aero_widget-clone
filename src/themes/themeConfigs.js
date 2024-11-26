import { redThemeBackground } from "../assets";
import { commonColors } from "./commonColors";

// Base theme configurations
const baseThemeConfigs = [
  {
    name: 'Red Theme',
    key: 'redTheme',
    theme: {
      light: {
        backgroundImage: redThemeBackground,
        background: '#f0f0f0',
        text: '#000000',
        primary: {
          main: '#f44336',
          shades: {
            100: '#ffebee',
            300: '#e57373',
            500: '#f44336',
            700: '#d32f2f',
            900: '#b71c1c',
          },
        },
        secondary: {
          main: '#9e9e9e',
          shades: {
            100: '#f1f1f1',
            300: '#bdbdbd',
            500: '#9e9e9e',
            700: '#616161',
            900: '#212121',
          },
        },
      },
      dark: {
        backgroundImage: redThemeBackground,
        background: '#212121',
        text: '#ffffff',
        primary: {
          main: '#f44336',
          shades: {
            100: '#ffcdd2',
            300: '#e57373',
            500: '#f44336',
            700: '#d32f2f',
            900: '#b71c1c',
          },
        },
        secondary: {
          main: '#9e9e9e',
          shades: {
            100: '#f5f5f5',
            300: '#eeeeee',
            500: '#9e9e9e',
            700: '#616161',
            900: '#212121',
          },
        },
      },
    },
  },
  // Add more themes here as needed
];

/**
 * Adds status colors (success, error, warning, etc.) to all themes.
 * @param {Array} themes - Array of theme configurations.
 * @param {Object} statusColors - Object containing status colors (success, error, etc.).
 * @returns {Array} - Updated array of theme configurations.
 */
const addStatusToThemes = (themes, statusColors) => {
  return themes.map(themeConfig => {
    const updatedTheme = { ...themeConfig };
    Object.keys(updatedTheme.theme).forEach(mode => {
      updatedTheme.theme[mode] = {
        ...updatedTheme.theme[mode],
        status: statusColors,
      };
    });
    return updatedTheme;
  });
};

// Add status colors to all themes
export const themeConfigs = addStatusToThemes(baseThemeConfigs, commonColors);
