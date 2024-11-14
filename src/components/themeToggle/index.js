import React from 'react';
import './ThemeToggle.css'; // Import your styles here

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
  console.log(isDarkMode,'gggggggg')
  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          {[...Array(10)].map((_, index) => (
            <span key={index} className="theme__icon-part"></span>
          ))}
        </span>
      </span>
    </label>
  );
};

export default ThemeToggleButton;
