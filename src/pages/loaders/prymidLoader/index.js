import React, { forwardRef } from "react";
import "./pryamidLoader.css"
const PryamidLoader = forwardRef((props, ref) => {
  return (
    <div className="PryamidLoaderWrapper" ref={ref}>
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
});

export default PryamidLoader;
