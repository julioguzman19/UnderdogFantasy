import "./PlayerPickEmCard.css";

function PlayerPickEmCard(props) {
  return (
    <div className="player-pick-em-card-container">
      <div className="player-pick-em-card-row">
        <img className="player-pick-em-image" src={props.image} />
        <p className="player-pick-em-name">{props.playerName}</p>
      </div>
      <hr />
      <div className="player-pick-em-card-row">
        <p>{props.stats}</p>
        <button>{props.buttonOne}</button>
        <button>{props.buttonTwo}</button>
      </div>
    </div>
  );
}
export default PlayerPickEmCard;
