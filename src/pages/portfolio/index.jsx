import React, { useEffect, useState } from "react";
import { Container } from "./portfolioStyles";
import HeroSection from "./heroSection";
import SkillsSection from "./skillSection";
import ProjectSection from "./projects";
import ContactSection from "./contacts";
import { Grid2 as Grid } from "@mui/material";
import MainCard from "../../components/mainCard";
import PortfolioHeader from "./header";
import { ImageIconView } from "./components";
import { fetchPortfolioData } from "./data";
import ObjectiveSection from "./objective";
import StaticsSection from "./statics";
const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData().then((data) => {
      console.log(data);
      setPortfolioData(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <PortfolioHeader />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <div>
            <Grid container spacing={2}>
              <Grid size={12}>
                <MainCard border style={{ height: "300px" }}>
                  <HeroSection data={portfolioData?.hero} isLoading={true} />
                </MainCard>
              </Grid>
              {[1, 2, 3].map((item) => (
                <Grid size={4}>
                  <MainCard height={"100%"}>
                    <ImageIconView
                      isLoading={true}
                      type="image"
                      src="https://via.placeholder.com/100"
                      title="test"
                    />
                  </MainCard>
                </Grid>
              ))}
              <Grid size={12}>
                <div>
                  <Grid container spacing={2}>
                    {[1, 2].map((item) => (
                      <Grid size={6}>
                        <MainCard border>
                          <ImageIconView
                            isLoading={true}
                            type="image"
                            src="https://via.placeholder.com/100"
                          />
                        </MainCard>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <div>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, md: 6 }}>
                <MainCard height={'100%'} border>
                  <ObjectiveSection
                    isLoading={isLoading}
                    data={portfolioData?.objective}
                  />
                </MainCard>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <MainCard height={'100%'} border>
                  <StaticsSection
                    isLoading={isLoading}
                    data={portfolioData?.statics}
                  />
                </MainCard>
              </Grid>
              {[1, 2, 3, 4].map((item) => (
                <Grid size={{ xs: 6, md: 3 }}>
                  <MainCard border>
                    <ImageIconView
                      isLoading={true}
                      type="image"
                      src="https://via.placeholder.com/100"
                      title={"test"}
                    />
                  </MainCard>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2}>
              <Grid size={12}>
                <div>
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4].map((item) => (
                      <Grid size={{ xs: 6, md: 3 }}>
                        <MainCard border>
                          <ProjectSection isLoading={true} />
                        </MainCard>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <SkillsSection isLoading={true} />
      <ContactSection isLoading={true} />
    </Container>
  );
};

export default Portfolio;
