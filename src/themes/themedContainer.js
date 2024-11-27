import React from "react";
import { useTheme } from "./themeProvider";

const ThemedContainer = ({ children }) => {
  const { theme } = useTheme();

  const containerStyle = {
    minHeight: "100vh",
    backgroundImage: theme.backgroundImage
      ? `url(${theme.backgroundImage})`
      : undefined,
    backgroundColor: theme.background,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: theme.text,
  };

  return <div style={containerStyle}>{children}</div>;
};

export default ThemedContainer;
