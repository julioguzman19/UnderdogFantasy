import React, { useState } from "react";
import "./PlayerPickEmCard.css";

function PlayerPickEmCard(props) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    if (activeButton === button) {
      setActiveButton(null);
    } else {
      setActiveButton(button);
    }
  };

  const getButtonStyle = (button) => ({
    backgroundColor: activeButton === button ? "#393939" : "#e4e4e4",
    color: activeButton === button ? "#f0f0f0" : "initial",
  });
  return (
    <div className="player-pick-em-card-container">
      <div className="player-pick-em-card-row">
        <hr
          className="player-pick-em-diagonal-line-one"
          style={{ backgroundColor: props.colorOne }}
        />
        <hr
          className="player-pick-em-diagonal-line-two"
          style={{ backgroundColor: props.colorTwo }}
        />
        <img
          className="player-pick-em-image"
          src={props.image}
          alt="playerImage"
        />
        <p className="player-pick-em-name">{props.playerName}</p>
      </div>
      <hr className="player-pick-em-hr" />
      <div className="player-pick-em-card-row">
        <p className="player-pick-em-stats">{props.stats}</p>
        <div className="player-pick-em-button-container">
          <button
            className="player-pick-em-card-button"
            style={getButtonStyle("buttonOne")}
            onClick={() => handleClick("buttonOne")}
          >
            {props.buttonOne}
          </button>
          <button
            className="player-pick-em-card-button"
            style={getButtonStyle("buttonTwo")}
            onClick={() => handleClick("buttonTwo")}
          >
            {props.buttonTwo}
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayerPickEmCard;
