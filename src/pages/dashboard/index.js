import { Box, Grid2 } from '@mui/material';
import React from 'react';
import MainCard from '../../components/mainCard';

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
  ];

  return (
    <Box>
      <Grid2 container spacing={2}>
        {dashboardData.map((item, index) => (
          <Grid2 key={index} size={{xs:12, sm:6, md:3}}>
            <MainCard data={{ title:item?.title}} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Dashboard;
