import "./SectionTwo.css";
import PhoneImage from "../../assets/homeSectionTwoPhone.png";

function SectionTwo() {
  return (
    <div className="section-two-container">
      <img className="section-two-phone-image" src={PhoneImage} alt="Phone" />
      <div className="section-two-text">
        <h2 className="section-two-h2">
          SIMPLE.
          <br />
          FAST.
          <br /> FUN.
        </h2>
        <p className="section-two-p">
          Get 5 picks right and you'll 20x your money!
        </p>
      </div>
    </div>
  );
}
export default SectionTwo;
