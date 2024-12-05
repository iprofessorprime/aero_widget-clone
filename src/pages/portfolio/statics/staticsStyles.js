import styled from "styled-components";

export const StaticsSectionWrap = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const StaticsTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const StaticsDescription = styled.div`
  font-size: 0.8rem;
  margin-bottom: 30px;
  text-align: center;
`;

export const SkillProgressWrap = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const SkillTitle = styled.div`
  font-size: 0.7rem;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0df;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #3b82f6; /* Change to the desired color */
  width: 0; /* Dynamic width based on percentage */
  transition: width 0.3s ease-in-out;
`;
