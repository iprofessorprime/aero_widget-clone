import { Box, Grid2 as Grid } from "@mui/material";
import React from "react";
import LiveAudioBroadcast from "./audioBroadcast";
import Messanger from "../../components/messanger";

const MobileAudioSender = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Messanger />
        </Grid>
        <Grid size={8}>
          <LiveAudioBroadcast />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileAudioSender;
