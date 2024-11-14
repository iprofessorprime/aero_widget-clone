import React, { forwardRef } from "react";
import "./slideLoader.css"
const SlideLoader = forwardRef((props, ref) => {
  return (
    <div className="slideLoaderWrapper" ref={ref}>
      <div className="section-center">
        <div className="section-path">
          <div className="globe">
            <div className="wrapper">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SlideLoader;
