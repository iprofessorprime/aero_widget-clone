import React, { forwardRef } from "react";
import './bouncingBallLoaderWrapper.css'

const BouncingBallLoader = forwardRef((props, ref) => {
  return (
    <div className="bouncingBallLoaderWrapper"  ref={ref}>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
});

export default BouncingBallLoader;
