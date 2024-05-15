import "./PlayerPickEmCard.css";

function PlayerPickEmCard(props) {
  return (
    <div className="player-pick-em-card-container">
      <div className="player-pick-em-card-row">
        <hr className="player-pick-em-diagonal-line-one" style={{ backgroundColor: props.colorOne }} />
        <hr className="player-pick-em-diagonal-line-two" style={{ backgroundColor: props.colorTwo }} />
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
          <button className="player-pick-em-card-button">
            {props.buttonOne}
          </button>
          <button className="player-pick-em-card-button">
            {props.buttonTwo}
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayerPickEmCard;
