import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./themes";

const getLoggedUserData = async () => {
  return new Promise(resolve =>
    setTimeout(() => resolve({ themeKey: "" }), 200)
  );
};
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
      const user = await getLoggedUserData();
      setUserThemeKey(user?.themeKey || "defaultTheme"); 
    };

    fetchUserData();
  }, []);
  if (showWelcome) {
    return <WelcomePage />;
  }
  
  if (userThemeKey === null) {
    return <div>Loading...</div>;
  }
  return (
    <ThemeProvider  defaultThemeKey={userThemeKey}>
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
