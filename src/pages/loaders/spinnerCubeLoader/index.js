import React, { forwardRef } from "react";
import './spinnerCubeLoader.css'
const SpinnerCubeLoader = forwardRef((props, ref) => {
  return (
    <div className="spinnerCubeLoaderWrapper" ref={ref}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});

export default SpinnerCubeLoader;
