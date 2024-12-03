import React from "react";
import { Container } from "./portfolioStyles";
import HeroSection from "./heroSection";
import SkillsSection from "./skillSection";
import ProjectSection from "./projects";
import ContactSection from "./contacts";
import { Grid2 as Grid } from "@mui/material";
import MainCard from "../../components/mainCard";
import PortfolioHeader from "./header";
import { ImageIconView } from "./components";
const Portfolio = () => {
  return (
    <Container>
      <PortfolioHeader />
      <Grid container spacing={2}>
        <Grid size={4}>
          <div>
            <Grid container spacing={2}>
              <Grid size={12}>
                <MainCard border style={{ height: "300px" }}>
                  <HeroSection />
                </MainCard>
              </Grid>
              {[1, 2, 3].map((item) => (
                <Grid size={4}>
                  <MainCard height={'100%'}>
                  <ImageIconView
                    type="image"
                    src="https://via.placeholder.com/100"
                    title="test"
                  />
                  </MainCard>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid size={8}>
          <div>
            <Grid container spacing={2}>
              {[1, 2].map((item) => (
                <Grid size={6}>
                  <MainCard>
                    <SkillsSection />
                  </MainCard>
                </Grid>
              ))}
              {[1, 2, 3, 4].map((item) => (
                <Grid size={3}>
                  <ImageIconView
                    type="image"
                    src="https://via.placeholder.com/100"
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={4}>
          <div>
            <Grid container spacing={2}>
            {[1, 2].map((item) => (
            <Grid size={6}>
              <MainCard>
              <ImageIconView
                type="image"
                src="https://via.placeholder.com/100"
              />
              </MainCard>
            </Grid>
          ))}
            </Grid>
            </div>
        </Grid>
        <Grid size={8}>
          <div>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item) => (
                <Grid size={3}>
                  <ProjectSection />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      <SkillsSection />
      <ContactSection />
    </Container>
  );
};

export default Portfolio;
