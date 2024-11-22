import { Grid2 as Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { chatBotPic } from "../../assets";
import MainCard from "../../components/mainCard";
import CodeViewerDialog from "../../components/codeViewer";
import SimpleChatBot from "./chatBot";

const ChatsUIList = () => {
  const navigate = useNavigate();
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
  const gamesList = [
    {
      name: "Chat Bot",
      image: chatBotPic,
      title: "Chat Bot",
      searchKeys: ["Chat", "Chat bot"],
      element: <SimpleChatBot />,
      code: { html: "", css: "", react: "" },
    },
    {
      image: chatBotPic,
      title: "Messages",
      searchKeys: ["Chat", "Messages UI", "Messages"],
      element: <SimpleChatBot />,
      code: { html: "", css: "", react: "" },
    },
  ];

  const handleGameClick = (url) => {
    if (!url) {
      toast.info("Coming Soon!");
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {gamesList.map((item, index) => (
          <Grid size={6} key={index}>
            <MainCard
              onClick={() => handleOpenModal(item)}
              data={{ backgroundImage: item.image, title: item.name }}
            />
          </Grid>
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

export default ChatsUIList;
