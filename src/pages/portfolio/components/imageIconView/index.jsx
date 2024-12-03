import React from "react";
import styled from "styled-components";
import PortfolioSkeleton from "../skeleton";

// Styled components for image and icon
const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  font-size: 2rem;
`;

const ImageTitle = styled.div`
  font-size: 1.5rem;
  margin: 8px 0 0 0;
  text-align: center;
`;

const ImageIconView = ({
  type = "image",
  src,
  icon,
  isLoading = true,
  title,
}) => {
  const SkeletonLoader = () => (
    <>
      <PortfolioSkeleton
        variant="circle"
        height="50px"
        width="50px"
        style={{ margin: "16px 0" }}
      />
    </>
  );

  const Content = () => {
    if (type === "image") {
      return isLoading ? (
        <SkeletonLoader />
      ) : (
        <img
          src={src}
          alt="Icon"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    } else {
      return isLoading ? <SkeletonLoader /> : <span>{icon}</span>;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {type === "image" ? (
        <ImageWrapper>{Content()}</ImageWrapper>
      ) : (
        <IconWrapper>{Content()}</IconWrapper>
      )}
      {title && <PortfolioSkeleton width="70%" />}
      {title && !isLoading && <ImageTitle>{title}</ImageTitle>}
    </div>
  );
};

export default ImageIconView;
