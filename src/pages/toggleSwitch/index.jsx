import React from 'react'
import CodeViewerDialog from '../../components/codeViewer';
import { Grid, GridItem } from '../../library';
import { TogglesData } from './toggleData';

const ToggleSwitchPage = () => {
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
    <>
    <Grid spacing={2}>
      {TogglesData.map((item, index) => (
        <GridItem md={3} key={index} onClick={() => handleOpenModal(item)}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {item.element}
          </div>
        </GridItem>
      ))}
    </Grid>

    {openCodeViewer && 
    <CodeViewerDialog open={openCodeViewer} selectedItem={selectedItem} onClose={handleCloseModal} />
    }
  </>
  )
}

export default ToggleSwitchPage