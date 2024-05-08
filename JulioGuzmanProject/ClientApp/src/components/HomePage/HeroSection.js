import "./HeroSection.css";
import DogImage from "../../assets/dog.png";

function HeroSection() {
  return (
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
  );
}
export default HeroSection;
