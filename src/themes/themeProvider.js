import React, { createContext, useContext, useState, useEffect } from "react";
import { themeConfigs } from "./themeConfigs";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultThemeKey = themeConfigs[0].key }) => {
  const [currentThemeKey, setCurrentThemeKey] = useState(defaultThemeKey);
  const [mode, setMode] = useState("light");

  // Find the active theme based on currentThemeKey and mode
  const activeTheme = themeConfigs.find(theme => theme.key === currentThemeKey)?.theme[mode];

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

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

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};