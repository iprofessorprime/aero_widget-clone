import React from "react";
import Messanger from "./messanger";
import { Grid2 as Grid } from "@mui/material";

const MessangerPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Messanger />
        </Grid>
        <Grid size={6}>
          <Messanger />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessangerPage;
