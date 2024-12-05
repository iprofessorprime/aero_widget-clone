import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid2 as Grid } from "@mui/material";
import AudioBroadcastReciever from './audioBroadcastReciever';
import Messanger from '../../components/messanger';

function MobileAudioReceiver() {
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Messanger />
        </Grid>
        <Grid size={8}>
          <AudioBroadcastReciever />
        </Grid>
      </Grid>
    </Box>
     
    </div>
  );
}

export default MobileAudioReceiver;
