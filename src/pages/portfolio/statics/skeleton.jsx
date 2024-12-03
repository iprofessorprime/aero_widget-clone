import React from "react";
import { PortfolioSkeleton } from "../components";

const StaticsSkeleton = () => {
  return (
    <>
      <PortfolioSkeleton height="40px" width="70%" />
      <PortfolioSkeleton
        variant="circle"
        height="50px"
        width="50px"
        style={{ margin: "16px 0" }}
      />
      <PortfolioSkeleton height="150px" />
    </>
  );
};

export default StaticsSkeleton;
