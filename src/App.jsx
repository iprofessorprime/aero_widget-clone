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
  const [userThemeKey, setUserThemeKey] = useState(null);

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

  useEffect(() => {
    const fetchUserData = async () => {
      const user = {themeKey:''}; // Replace with actual API call
      setUserThemeKey(user?.themeKey || "defaultTheme"); // Fallback to a default theme
    };

    fetchUserData();
  }, []);
  if (showWelcome) {
    return <WelcomePage />;
  }
  
  if (userThemeKey === null) {
    // Show a loading indicator or return null until the user theme is loaded
    return <div>Loading...</div>;
  }
  return (
    <ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className='container'>
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
