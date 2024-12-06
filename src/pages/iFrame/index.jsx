import React, { useState } from "react";
import MyIframeComponent from "./MyIframeComponent";
import { Box, Grid2 as Grid, TextField } from "@mui/material";

const IframePage = () => {
  const [form, setForm] = useState({
    url: "https://www.wikipedia.org/",
    title: "Sample Title",
    thumbnailURL: { source: { original: { url: "./thumbnail.png" } } },
    activityLabel: "Activity Label",
    activityTitle: "Activity Title",
    instructions: "Instructions for the activity",
    captions: "Some caption text.",
    credit: "Image credit information",
    style: {
      width: "100%",
      customCss: ".custom-style {width:100%; color: red; }",
    },
  });

  const [inputValues, setInputValues] = useState({ ...form });

  const cohort = {
    isMobile: false,
    isOnline: true,
  };

  const CDPCopy = {
    event: (eventName) => ({
      publish: (data) => console.log(`${eventName} event published`, data),
    }),
  };

  const plugin = {
    componentId: "plugin-123",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: inputValues[name],
    }));
  };

  const renderInputFields = () => {
    const fields = [
      { name: "title", label: "Title" },
      { name: "url", label: "URL" },
      { name: "activityLabel", label: "Activity Label" },
      { name: "activityTitle", label: "Activity Title" },
      { name: "instructions", label: "Instructions" },
      { name: "captions", label: "Captions" },
      { name: "credit", label: "Credit" },
      { name: "style.customCss", label: "Custom CSS" },
    ];

    return fields.map((field) => {
      const fieldValue = field.name
        .split(".")
        .reduce((o, i) => (o ? o[i] : ""), inputValues);

      return (
        <Box key={field.name}>
          <TextField
            label={field.label}
            name={field.name}
            value={fieldValue || ""}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            fullWidth
            variant="outlined"
            sx={{ mb: 4 }}
          />
        </Box>
      );
    });
  };

  return (
    <div className="iframe-page-wrapper">
      <div style={{ textAlign: "center" }}>
        <h1>Test iFrame</h1>
      </div>
      <Box>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box
              sx={{
                height: "100vh",
                overflow: "hidden",
                overflowY: "scroll",
                p: 2,
                width: "100%",
              }}
            >
              {renderInputFields()}
            </Box>
          </Grid>
          <Grid size={9}>
            <Box
              sx={{
                height: "100vh",
                overflow: "hidden",
                overflowY: "scroll",
                p: 2,
                width: "100%",
              }}
            >
              <MyIframeComponent
                state={form}
                cohort={cohort}
                CDPCopy={CDPCopy} // Pass CDPCopy as a prop here
                plugin={plugin}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default IframePage;