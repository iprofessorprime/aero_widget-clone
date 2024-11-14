import React, { forwardRef } from "react";
import "./barLoader.css";
const BarLoader = forwardRef((props, ref) => {
  return (
    <div className="barLoaderWrapper" ref={ref}>
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
});

export default BarLoader;
