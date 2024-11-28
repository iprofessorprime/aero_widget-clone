import { basicThemeBgLight, basicThemeBgDark, greenThemeBackground, redThemeBackground } from "../assets";
import { commonColors } from "./commonColors";

const baseThemeConfigs = [
  {
    name: 'Default Theme',
    key: 'defaultTheme',
    theme: {
      light: {
        backgroundImage: basicThemeBgLight,
        background: '#f0f0f0',
        text: '#000000',
        primary: {
          main: '#D6ECFD',
          shades: {
            100: '#e4f3fe',
            300: '#b0d8f7',
            500: '#D6ECFD',
            700: '#a0c1e3',
            900: '#7a9ecf',
          },
        },
        secondary: {
          main: '#FFB6C1', // New secondary main color (light pink)
          shades: {
            100: '#FFD6E3',
            300: '#FF89A1',
            500: '#FFB6C1',
            700: '#D6869E',
            900: '#A75A7D',
          },
        },
      },
      dark: {
        backgroundImage: basicThemeBgDark,
        background: '#212121',
        text: '#ffffff',
        primary: {
          main: '#345069',
          shades: {
            100: '#5b7a8e',
            300: '#456277',
            500: '#345069',
            700: '#24374a',
            900: '#162635',
          },
        },
        secondary: {
          main: '#FFA07A', // New secondary main color (light salmon)
          shades: {
            100: '#FFB89E',
            300: '#FF8F66',
            500: '#FFA07A',
            700: '#D67D56',
            900: '#A65F41',
          },
        },
      },
    },
  },  
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
  {
    name: 'green',
    key: 'greenTheme',
    theme: {
      light: {
        backgroundImage: greenThemeBackground,
        background: '#e8f5e9',
        text: '#000000',
        primary: {
          main: '#4caf50',
          shades: {
            100: '#c8e6c9',
            300: '#4caf50',
            500: '#4caf50',
            700: '#388e3c',
            900: '#1b5e20',
          }
        },
        secondary: {
          main: '#9e9e9e',
          shades: {
            100: '#f1f1f1',
            300: '#bdbdbd',
            500: '#9e9e9e',
            700: '#616161',
            900: '#212121',
          }
        },
      },
      dark: {
        backgroundImage: greenThemeBackground,
        background: '#121212',
        text: '#ffffff',
        primary: {
          main: '#4caf50',
          shades: {
            100: '#a5d6a7',
            300: '#4caf50',
            500: '#4caf50',
            700: '#388e3c',
            900: '#1b5e20',
          }
        },
        secondary: {
          main: '#9e9e9e',
          shades: {
            100: '#f5f5f5',
            300: '#eeeeee',
            500: '#9e9e9e',
            700: '#616161',
            900: '#212121',
          }
        },
      },
    },
  },
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
