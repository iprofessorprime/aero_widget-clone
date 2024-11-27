import React, { useState, useEffect } from 'react';
// import { myThemesColors } from '../../themes/colors';
import CurrentColorsList from './colorsList';

const ColorsPage = () => {
  // const [currentTheme, setCurrentTheme] = useState(myThemesColors[0]); // Default to the first theme

  // const chooseCustomTheme = (themeName) => {
  //   const selectedTheme = myThemesColors.find(theme => theme.name === themeName);
  //   if (selectedTheme) {
  //     setCurrentTheme(selectedTheme);
  //   }
  // };

  return (
    <div>
      {/* {myThemesColors.map((theme) => (
        <button
          key={theme.key}
          style={{ backgroundColor: theme.name, color: '#fff', marginRight: '10px' }}
          onClick={() => chooseCustomTheme(theme.name)}
        >
          {theme.name}
        </button>
      ))} */}
      {/* <CurrentColorsList currentTheme={currentTheme} /> */}
    </div>
  );
};

export default ColorsPage;
