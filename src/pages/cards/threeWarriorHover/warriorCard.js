import React from "react";
import './warrior.css'; 

const WarriorCard = ({ coverImage, titleImage, characterImage }) => {
  return (
    <div className="warriorCardWrapper">
      <div className="card">
        <div className="wrapper">
          <img src={coverImage} alt="cover" className="cover-image" />
        </div>
        <img src={titleImage} alt="title" className="title" />
        <img src={characterImage} alt="character" className="character" />
      </div>
    </div>
  )
}

export default WarriorCard;
