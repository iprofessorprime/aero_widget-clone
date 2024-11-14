import React, { forwardRef } from "react";
import "./CubeLoader.css";
const CubeLoader = forwardRef((props, ref) => {
  return (
    <div className="cubeLoaderWrapper" ref={ref}>
      <div className="loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-1"></div>
        <div className="cell d-2"></div>

        <div className="cell d-2"></div>
        <div className="cell d-3"></div>

        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
      </div>
    </div>
  );
});

export default CubeLoader;
