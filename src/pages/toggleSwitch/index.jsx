import React, { useState } from "react";
import CodeViewerDialog from "../../components/codeViewer";
import { Grid, GridItem } from "../../library";
import { TogglesData } from "./toggleData";
import MainCard from "../../components/mainCard";

const ToggleSwitchPage = () => {
  const [openCodeViewer, setOpenCodeViewer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenCodeViewer(true);
  };

  const handleCloseModal = () => {
    setOpenCodeViewer(false);
    setSelectedItem(null);
  };
  return (
    <>
      <Grid spacing={2}>
        {TogglesData.map((item, index) => (
          <GridItem md={3} key={index} onClick={() => handleOpenModal(item)}>
            <MainCard>
              {item.element}
            </MainCard>
          </GridItem>
        ))}
      </Grid>

      {openCodeViewer && (
        <CodeViewerDialog
          open={openCodeViewer}
          selectedItem={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ToggleSwitchPage;
