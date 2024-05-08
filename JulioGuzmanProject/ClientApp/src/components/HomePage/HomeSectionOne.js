import "./HomeSectionOne.css";
import PhoneImage from "../../assets/homeSectionOnePhone.png";
import HeroSection from "./HeroSection";

function HomeSectionOne() {
  return (
    <div className="hero-container">
      <HeroSection />

      <div className="promotion-message-container">
        <div className="win-money-text">
          WIN MONEY
          <br />
          ON SPORTS
        </div>
        <img className="phone-image center" src={PhoneImage} alt="Phone" />
      </div>
    </div>
  );
}
export default HomeSectionOne;
