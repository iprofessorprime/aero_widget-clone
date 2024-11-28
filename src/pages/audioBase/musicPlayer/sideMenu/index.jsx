import React from 'react';
import { Button, MenuItem, SideMenuWrapper } from '../audioStyles';

const MusicPlayerSideMenu = ({ audioFiles, onSelectAudio, deleteAudio }) => {
  return (
    <SideMenuWrapper>
        <h4>Audio Files</h4>
        {audioFiles.map((audioFile, index) => (
          <MenuItem key={audioFile.url} onClick={() => onSelectAudio(index)}>
            {audioFile.name}
            <Button
              icon
              color="red"
              onClick={(e) => deleteAudio(index, e)}
            >
              🗑️
            </Button>
          </MenuItem>
        ))}
      </SideMenuWrapper>
  );
};

export default MusicPlayerSideMenu;
