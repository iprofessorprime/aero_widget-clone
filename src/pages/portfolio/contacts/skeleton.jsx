import React from "react";
import { PortfolioSkeleton } from "../components";

const ContactSkeleton = () => {
  return (
    <>
      <PortfolioSkeleton height="40px" width="40%" />
      <PortfolioSkeleton width="80%" />
      <PortfolioSkeleton width="80%" />
      <PortfolioSkeleton width="80%" />
      <PortfolioSkeleton width="80%" />
      <PortfolioSkeleton height="50px" />
    </>
  );
};

export default ContactSkeleton;
