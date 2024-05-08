import "./HomeSectionOne.css";
import PhoneImage from "../../assets/homeSectionOnePhone.png";
import QrCodeImage from "../../assets/qrCode.png";
import HeroSection from "./HeroSection";

function HomeSectionOne() {
  return (
    <div className="hero-container">
      <HeroSection />
      <div className="promotion-message-container">
        <div>
          <p className="win-money-text">
            WIN MONEY
            <br />
            ON SPORTS
          </p>
          <div className="qr-code-section">
            <p className="qr-code-section-text">Download the Underdog App (QR to redirect to footer)</p>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="qr-code-section-image"
                src={QrCodeImage}
                alt="qrCode"
              />
            </a>
          </div>
        </div>

        <img className="phone-image center" src={PhoneImage} alt="Phone" />
      </div>
    </div>
  );
}
export default HomeSectionOne;
