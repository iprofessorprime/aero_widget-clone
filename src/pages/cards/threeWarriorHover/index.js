import React from "react";
import WarriorCard from "./warriorCard.js";
import { forceMageCharacter, forceMageTitle, forceMageCover, darkRiderCharacter, darkRiderTitle, darkRiderCover } from "../../../assets/index.js";

const ThreeWarriorHover = ({ index }) => {
  const warriorsData = [
    {
      name: '',
      coverImage: darkRiderCover,
      titleImage: darkRiderTitle,
      characterImage: darkRiderCharacter,
    },
    {
      name: '',
      coverImage: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleImage: forceMageTitle,
      characterImage: forceMageCharacter,
    }
  ];

  const renderData = warriorsData[index];

  return (
    <>
      <WarriorCard {...renderData} />
    </>
  );
};

export default ThreeWarriorHover;
