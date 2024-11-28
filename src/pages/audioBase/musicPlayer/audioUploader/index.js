import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h4`
  margin-bottom: 14px;
  font-size: 20px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.danger ? "#e74c3c" : "#3498db")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${(props) => (props.danger ? "#c0392b" : "#2980b9")};
  }
`;

const AudioUpload = ({ isOpen, onClose, onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Upload Audio File</Title>
        <FileInput
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
        />
        <ButtonsWrapper>
          <Button onClick={handleUpload}>Upload</Button>
          <Button danger onClick={onClose}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AudioUpload;
