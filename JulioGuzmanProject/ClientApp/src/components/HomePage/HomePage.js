import React, { Component } from "react";
import "./HomePage.css";
import TextCarousel from "./TextCarousel";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import GamingDisclaimer from "../GamingDisclaimer";

export class HomePage extends Component {
  static displayName = HomePage.name;

  render() {
    return (
      <div>
        <TextCarousel />
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
        <GamingDisclaimer />
      </div>
    );
  }
}
