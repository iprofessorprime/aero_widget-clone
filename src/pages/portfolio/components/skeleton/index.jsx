import React from "react";
import styled, { keyframes, css } from "styled-components";

// Pulse animation
const pulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: 200% 200%;
  }
  100% {
    background-position: -200% -200%;
  }
`;

const SkeletonBase = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? "#424242" : "#e0e0e0"};
  border-radius: ${(props) => (props.variant === "circle" ? "50%" : "4px")};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  margin-bottom: 10px;

  ${(props) =>
    props.animation === "pulse" &&
    css`
      animation: ${pulse} 1.5s infinite ease-in-out;
    `}

  ${(props) =>
    props.animation === "shimmer" &&
    css`
      background: linear-gradient(
        135deg,
        ${props.mode === "dark" ? "#424242" : "#e0e0e0"} 25%,
        ${props.mode === "dark" ? "#616161" : "#f5f5f5"} 50%,
        ${props.mode === "dark" ? "#424242" : "#e0e0e0"} 75%
      );
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
    `}
`;

const PortfolioSkeleton = ({
  variant = "rectangular",
  width,
  height,
  animation = "shimmer",
  mode = "dark",
  ...props
}) => {
  return (
    <SkeletonBase
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      mode={mode}
      {...props}
    />
  );
};

export default PortfolioSkeleton;
