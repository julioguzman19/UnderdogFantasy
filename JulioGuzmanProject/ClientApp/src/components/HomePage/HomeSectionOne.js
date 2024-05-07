import "./HomeSectionOne.css";
import DogImage from "../../assets/dog.png";
import PhoneImage from "../../assets/homeSectionOnePhone.png";

function HomeSectionOne() {
  return (
    <div className="hero-container">
      <div className="hero-row">
        <div className="image-text-wrapper">
          <img className="dog-logo-image" src={DogImage} alt="Dog" />
          <p className="dog-logo-text">
            UNDERDOG
            <br />
            FANTASY
          </p>
        </div>
        <div className="buttons-wrapper">
          <button className="login-button">Log in</button>
          <button className="signup-button">Sign up</button>
        </div>
      </div>

      <div className="promotion-message-container">
        <div className="win-money-text">WIN MONEY<br/>ON SPORTS</div>
        <img className="phone-image center" src={PhoneImage} alt="Phone" />
      </div>
    </div>
  );
}
export default HomeSectionOne;
