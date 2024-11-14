import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CodeViewerCard from "../../common/codeViewerCard";
import { Grid, GridItem } from "../../library";

const CodeViewerDialog = ({ open, selectedItem, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{selectedItem?.title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <GridItem item md={4}>
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {selectedItem?.element}
            </div>
          </GridItem>
          <GridItem item md={8}>
            <div style={{ height: "100%" }}>
              <CodeViewerCard title={selectedItem?.title} code={selectedItem?.code} />
            </div>
          </GridItem>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CodeViewerDialog;
