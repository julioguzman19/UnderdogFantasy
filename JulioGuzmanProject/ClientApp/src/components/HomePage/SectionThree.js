import "./SectionThree.css";
import "./PlayerPickEmCard";
import PlayerPickEmCard from "./PlayerPickEmCard";
import NikolaJokic from "../../assets/NikolaJokic.png";

function SectionThree() {
  return (
    <div className="section-three-container">
      <h2 className="section-three-h2">
        PICK'EM.
        <br />
        WATCH'EM.
        <br />
        WINE'EM.
      </h2>
      <p className="section-three-p">
        Choose higher or lower on 2 to 5 of your favorite players' stats. The
        more you pick, the more you could win.
      </p>
      <div className="section-three-pick-em">
      <PlayerPickEmCard
        colorOne="#FEC524"
        colorTwo="#0E2240"
        image={NikolaJokic}
        stats="15.5 Points"
        playerName="Nikola Jokic"
        buttonOne="Higher"
        buttonTwo="Lower"
      />
      <PlayerPickEmCard
        colorOne="#FEC524"
        colorTwo="#0E2240"
        image={NikolaJokic}
        stats="15.5 Points"
        playerName="Nikola Jokic"
        buttonOne="Higher"
        buttonTwo="Lower"
      />
      <PlayerPickEmCard
        colorOne="#FEC524"
        colorTwo="#0E2240"
        image={NikolaJokic}
        stats="15.5 Points"
        playerName="Nikola Jokic"
        buttonOne="Higher"
        buttonTwo="Lower"
      />
      <PlayerPickEmCard
        colorOne="#FEC524"
        colorTwo="#0E2240"
        image={NikolaJokic}
        stats="15.5 Points"
        playerName="Nikola Jokic"
        buttonOne="Higher"
        buttonTwo="Lower"
      />
      </div>
    </div>
  );
}
export default SectionThree;
