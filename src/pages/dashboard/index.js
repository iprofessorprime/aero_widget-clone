import { Box } from '@mui/material';
import React from 'react';
import { Grid, GridItem } from '../../library';
import CodeViewerCard from '../../common/codeViewerCard';

const Dashboard = () => {
  const dashboardData = [
    {
      title: "HTML Card",
      url: '/html-card',
      code: {
        html: `
          <div class="container">
            <h1>Hello World</h1>
            <p>This is a sample paragraph</p>
          </div>
        `,
        css: ``,
        react: ``
      }
    },
    {
      title: "CSS Card",
      url: '/css-card',
      code: {
        html: ``,
        css: `
          .container {
            background-color: lightgray;
            padding: 20px;
            border-radius: 8px;
          }
          h1 {
            color: teal;
          }
        `,
        react: ``
      }
    },
    {
      title: "React Card",
      url: '/react-card',
      code: {
        html: ``,
        css: ``,
        react: `
          import React from 'react';

          const HelloWorld = () => (
            <div className="container">
              <h1>Hello World</h1>
              <p>This is rendered by a React component</p>
            </div>
          );

          export default HelloWorld;
        `
      }
    },
    {
      title: "Combined",
      url: '/combined-card',
      code: {
        html: `
          <div class="container">
            <h1 class="title">Welcome to the Dashboard</h1>
            <p>This is a combined HTML and CSS example</p>
          </div>
        `,
        css: `
          .container {
            background-color: lavender;
            padding: 15px;
            border-radius: 10px;
          }
          .title {
            color: darkslateblue;
          }
        `,
        react: `
          import React from 'react';
          import './styles.css'; // Assuming external CSS

          const CombinedCard = () => (
            <div className="container">
              <h1 className="title">Welcome to React</h1>
              <p>This example combines React, HTML, and CSS</p>
            </div>
          );

          export default CombinedCard;
        `
      }
    }
  ];

  return (
    <Box>
      <Grid>
        {dashboardData.map((item, index) => (
          <GridItem key={index} xs={12} sm={6} md={3}>
            <CodeViewerCard title={item?.title} code={item?.code} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
