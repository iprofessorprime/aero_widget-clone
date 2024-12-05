import React from "react";
import {
  ObjectiveSectionWrap,
  ObjectiveTitle,
  ObjectiveDescription,
} from "./objectiveStyles";
import Objectivekeleton from "./skeleton";

const ObjectiveSection = ({ data, isLoading = true }) => {
  const {title, description}=data
  return (
    <ObjectiveSectionWrap>
      {isLoading ? (
        <Objectivekeleton />
      ) : (
        <>
          {title&&<ObjectiveTitle>{title}</ObjectiveTitle>}
          {description&&<ObjectiveDescription>{description}</ObjectiveDescription>}
        </>
      )}
    </ObjectiveSectionWrap>
  );
};

export default ObjectiveSection;
