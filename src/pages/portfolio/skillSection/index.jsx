import React from "react";
import {
  SectionTitle,
  SkillItem,
  SkillsGrid,
  SkillsSectionWrapper,
} from "./skillsStyles";
import SkillSkeleton from "./skeleton";
import { PortfolioSkeleton } from "../components";

const SkillsSection = ({ isLoading = true }) => {
  return (
    <SkillsSectionWrapper>
      <>
      {isLoading ? <PortfolioSkeleton width="40%" height="50px" /> : <SectionTitle>Skills</SectionTitle>}
        <SkillsGrid>
          {["JavaScript", "React", "Node.js", "CSS", "HTML", "Git"].map(
            (skill, index) => (
              <>
                {isLoading ? (
                  <SkillSkeleton />
                ) : (
                  <SkillItem key={index}>{skill}</SkillItem>
                )}
              </>
            )
          )}
        </SkillsGrid>
      </>
    </SkillsSectionWrapper>
  );
};

export default SkillsSection;
