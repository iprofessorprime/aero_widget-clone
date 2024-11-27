import React from "react";
import styled from "styled-components";

const Page404 = () => {
  return (
    <Page404Section>
      <Container>
        <Row>
          <Col>
            <InnerCol>
              <FourZeroFourBg>
                <h1>404</h1>
              </FourZeroFourBg>
              <ContentBox>
                <h3>Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <Link404 href="/">Go to Home</Link404>
              </ContentBox>
            </InnerCol>
          </Col>
        </Row>
      </Container>
    </Page404Section>
  );
};

export default Page404;

const Page404Section = styled.section`
  padding: 40px 0;
  background: transparent;
  font-family: "Arvo", serif;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Col = styled.div`
  width: 100%;
  text-align: center;
`;

const InnerCol = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const FourZeroFourBg = styled.div`
  background-image: url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif");
  height: 400px;
  background-position: center;
  background-size: cover;

  h1 {
    font-size: 80px;
    color: #fff;
  }
`;

const ContentBox = styled.div`
  margin-top: -50px;

  h3 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const Link404 = styled.a`
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: #2d8b25;
  }
`;
