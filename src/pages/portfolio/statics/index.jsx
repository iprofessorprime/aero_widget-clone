import React from "react";
import {
  StaticsSectionWrap,
  StaticsTitle,
  StaticsDescription,
  SkillProgressWrap,
  SkillTitle,
  ProgressBar,
  ProgressFill,
} from "./staticsStyles";
import Staticskeleton from "./skeleton";
import { Grid2 as Grid } from "@mui/material";

const StaticsSection = ({ data, isLoading = true }) => {
  const { title, description, skills } = data;

  return (
    <StaticsSectionWrap>
      {isLoading ? (
        <Staticskeleton />
      ) : (
        <>
          {title && <StaticsTitle>{title}</StaticsTitle>}
          {description && (
            <StaticsDescription>{description}</StaticsDescription>
          )}
          {skills &&
            skills.map((skill, index) => (
              <SkillProgressWrap key={index}>
                <Grid container spacing={2}>
                  <Grid size={4}>
                    <SkillTitle>{skill.name}</SkillTitle>
                  </Grid>
                  <Grid size={8}>
                    <ProgressBar>
                      <ProgressFill style={{ width: `${skill.percentage}%` }} />
                    </ProgressBar>
                  </Grid>
                </Grid>
              </SkillProgressWrap>
            ))}
        </>
      )}
    </StaticsSectionWrap>
  );
};

export default StaticsSection;
