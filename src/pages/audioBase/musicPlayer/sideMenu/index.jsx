import React from 'react';
import { MenuItem, SideMenuWrapper } from '../audioStyles';

const AudioSideMenu = ({ audioFiles, onAudioSelect }) => {
  return (
    <SideMenuWrapper>
      <h4>Audio Files</h4>
      {audioFiles.map((audioFile, index) => (
        <MenuItem key={audioFile.url} onClick={() => onAudioSelect(index)}>
          {audioFile.name}
        </MenuItem>
      ))}
    </SideMenuWrapper>
  );
};

export default AudioSideMenu;
