import React from "react";
import './customLoader.css'; // Ensure you create and import the corresponding CSS file

const LiquidLoader = () => {
  return (
    <div className="liquidLoaderWrapper">
    <div className="container">
      <div className="liquid"></div>
      <div className="liquid"></div>
      <div className="liquid"></div>
      <div className="liquid"></div>

      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10
            "
          />
        </filter>
      </svg>
    </div>
    </div>
  );
};

export default LiquidLoader;
