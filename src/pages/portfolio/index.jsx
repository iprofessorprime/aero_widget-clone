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
import { fetchPortfolioData } from './data'
const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData()
    .then((data) => {
      setPortfolioData(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Container>
      <PortfolioHeader />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <div>
            <Grid container spacing={2}>
              <Grid size={12}>
                <MainCard border style={{ height: "300px" }}>
                  <HeroSection isLoading={isLoading} />
                </MainCard>
              </Grid>
              {[1, 2, 3].map((item) => (
                <Grid size={4}>
                  <MainCard height={"100%"}>
                    <ImageIconView
                     isLoading={isLoading}
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
                           isLoading={isLoading}
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
              {[1, 2].map((item) => (
                <Grid size={{ xs: 6, md: 6 }}>
                  <MainCard border>
                    <SkillsSection isLoading={isLoading} />
                  </MainCard>
                </Grid>
              ))}
              {[1, 2, 3, 4].map((item) => (
                <Grid size={{ xs: 6, md: 3 }}>
                  <MainCard border>
                    <ImageIconView
                     isLoading={isLoading}
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
                          <ProjectSection isLoading={isLoading} />
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

      <SkillsSection isLoading={isLoading} />
      <ContactSection isLoading={isLoading} />
    </Container>
  );
};

export default Portfolio;
