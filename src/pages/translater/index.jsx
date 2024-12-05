import React from 'react'
import { Box, Grid2 as Grid } from "@mui/material";
import AudioToText from './audioToText';
import TextToAudio from './textToAudio';

const TranslaterPage = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <AudioToText />
        </Grid>
        <Grid size={6}>
          <TextToAudio />
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default TranslaterPage