import React from "react";
import { ProjectCard, ProjectsGrid, ProjectsSection } from "./projectStyles";
import { SectionTitle } from "../portfolioStyles";
import MainCard from "../../../components/mainCard";
import ProjectSkeleton from "./skeleton";
const ProjectSection = ({ projectTitle = "12", isLoading = true }) => {
  return (
    <ProjectsSection>
      {isLoading ? (
        <ProjectSkeleton />
      ) : (
        <>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>
            <MainCard border shadow>
              <ProjectCard>
                <p>Project {projectTitle} 1</p>
              </ProjectCard>
            </MainCard>
          </ProjectsGrid>
        </>
      )}
    </ProjectsSection>
  );
};

export default ProjectSection;