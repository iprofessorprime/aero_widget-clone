import React, { useEffect, useState, useRef } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import AudioBroadcastReciever from "./audioBroadcastReciever";

function MobileAudioReceiver() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <AudioBroadcastReciever />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MobileAudioReceiver;
