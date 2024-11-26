import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./themes";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [currentTheme, setCurrentTheme] = useState({}); // Theme state

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedWelcome");

    if (!hasVisited) {
      setShowWelcome(true);
      const timer = setTimeout(() => {
        localStorage.setItem("hasVisitedWelcome", "true");
        setShowWelcome(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Function to update theme
  const updateTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme.name);
  };

  if (showWelcome) {
    return <WelcomePage />;
  }

  return (
    <ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className='container'>
        {/* <Themes onThemeChange={updateTheme} />  */}
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
