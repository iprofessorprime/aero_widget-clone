import React from "react";
import { PortfolioSkeleton } from "../components";

const HeroSkeleton = () => {
  return (
    <>
      <PortfolioSkeleton
        variant="circle"
        height="80px"
        width="80px"
        style={{ margin: "16px 0" }}
      />
      <PortfolioSkeleton width="50%" />
      <PortfolioSkeleton width="70%" />
    </>
  );
};

export default HeroSkeleton;
