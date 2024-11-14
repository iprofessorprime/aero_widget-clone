import { Grid, GridItem } from "../../library";
import { useState } from "react";
import CodeViewerDialog from "../../components/codeViewer";
import { loadersList } from "./loaderData";

const AllLoaders = () => {
  const [openCodeViewer, setOpenCodeViewer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOpenModal = (item) => {
    setSelectedItem(item); // Store the selected card data
    setOpenCodeViewer(true); // Open the modal
  };

  const handleCloseModal = () => {
    setOpenCodeViewer(false); // Close the modal
    setSelectedItem(null); // Clear the selected item
  };
  return (
    <div>
      <Grid>
        {loadersList.map((item) => (
          <GridItem md={3} onClick={() => handleOpenModal(item)}>
            <div
              style={{
                width: "100%",
                height: "200px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                overflow: "hidden",
                backgroundColor: "#F9F9F920",
                boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
              }}
            >
              {item.element}
            </div>
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
    </div>
  );
};
export default AllLoaders;
