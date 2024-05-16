import "./SectionThree.css";
import "./PlayerPickEmCard";
import "./MultiplierSelection";
import PlayerPickEmCard from "./PlayerPickEmCard";
import NikolaJokic from "../../assets/NikolaJokic.png";
import LionelMessi from "../../assets/LionelMessi.png";
import JoeBurrow from "../../assets/JoeBurrow.png";
import LewisHamilton from "../../assets/LewisHamilton.png";
import SkylarDigginsSmith from "../../assets/SkylarDiggins-Smith.png";
import MultiplierSelection from "./MultiplierSelection";

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
          colorOne="#F7B5CD"
          colorTwo="#231F20"
          image={LionelMessi}
          stats="15.5 Points"
          playerName="Lionel Messi"
          buttonOne="Higher"
          buttonTwo="Lower"
        />
        <PlayerPickEmCard
          colorOne="#FB4f14"
          colorTwo="#1B1B1B"
          image={JoeBurrow}
          stats="1.5 Touchdowns"
          playerName="Joe Burrow"
          buttonOne="Higher"
          buttonTwo="Lower"
        />
        <PlayerPickEmCard
          colorOne="#1B1B1B"
          colorTwo="rgb(0, 210, 190)"
          image={LewisHamilton}
          stats="3.5 Finishing Position"
          playerName="Lewis Hamilton"
          buttonOne="Better"
          buttonTwo="Worse"
        />
        <PlayerPickEmCard
          colorOne="#201747"
          colorTwo="#CB6015"
          image={SkylarDigginsSmith}
          stats="16 Points"
          playerName="Skylar Diggins-Smith"
          buttonOne="Higher"
          buttonTwo="Lower"
        />
        <MultiplierSelection />
      </div>
    </div>
  );
}
export default SectionThree;
