import styled from "styled-components";

// Hero Section styled component
export const HeroSectionWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #555;
  margin: 0 auto 20px;
  overflow: hidden;
`;

export const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Tagline = styled.p`
  font-size: 1.2rem;
  color: #888;
`;
