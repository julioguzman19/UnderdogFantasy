import React from "react";
import "./GamingDisclaimer.css";

function GamingDisclaimer() {
  return (
    <div className="responsible-gaming-container center">
      <p className="responsible-gaming-terms">
        <b className="color-gold">Underdog Responsible Gaming</b>
        <br />
        <b>Concerned with your play?</b>
        <br />
        Call 1-800-GAMBLER or visit{" "}
        <a href="https://www.ncpgambling.org">www.ncpgambling.org</a>; AZ:
        1-800-NEXT-STEP (1-800-639-8783) or text NEXT-STEP to 53342; NY: Call
        the 24/7 HOPEline at 1-877-8-HOPENY or Text HOPENY (467369) Learn more
        about Underdog Contests and how to identify highly experienced players
        at{" "}
        <a href="https://www.underdogfantasy.com/rules">
          www.underdogfantasy.com/rules
        </a>
        ; Learn more about average results at{" "}
        <a href="https://www.underdogfantasy.com/average-results">
          www.underdogfantasy.com/average-results
        </a>
        .
      </p>
    </div>
  );
}

export default GamingDisclaimer;
