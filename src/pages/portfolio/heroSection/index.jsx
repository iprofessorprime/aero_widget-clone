import React from "react";
import {
  HeroSectionWrapper,
  Name,
  ProfileImage,
  Tagline,
} from "./heroSectionstyle";
import HeroSkeleton from "./skeleton";

const HeroSection = ({ isLoading = true }) => {
  return (
    <HeroSectionWrapper>
      {isLoading ? (
        <HeroSkeleton />
      ) : (
        <>
          <ProfileImage>
            <img
              src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
              width={"100%"}
              height={"100%"}
            />
          </ProfileImage>
          <Name>John Doe</Name>
          <Tagline>Software Engineer | Building Solutions</Tagline>
        </>
      )}
    </HeroSectionWrapper>
  );
};

export default HeroSection;
