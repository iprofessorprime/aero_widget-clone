import React, { createContext, useContext, useState } from "react";
import { themeConfigs } from "./themeConfigs"; // Your theme configurations

// Create a Theme Context
const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  // State to manage the current theme and mode
  const [currentThemeKey, setCurrentThemeKey] = useState(themeConfigs[0].key); // Default to first theme
  const [mode, setMode] = useState("light"); // 'light' or 'dark'

  // Get the active theme object
  const activeTheme = themeConfigs.find(theme => theme.key === currentThemeKey)?.theme[mode];

  // Function to toggle light/dark mode
  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  // Function to switch theme
  const switchTheme = themeKey => {
    if (themeConfigs.some(theme => theme.key === themeKey)) {
      setCurrentThemeKey(themeKey);
    } else {
      console.warn(`Theme with key "${themeKey}" not found.`);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        currentThemeKey,
        mode,
        toggleMode,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
