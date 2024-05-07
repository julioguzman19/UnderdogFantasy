import React, { Component } from "react";
import "./HomePage.css";
import TextCarousel from "./TextCarousel";
import HomeSectionOne from "./HomeSectionOne";
import GamingDisclaimer from "../GamingDisclaimer";

export class HomePage extends Component {
  static displayName = HomePage.name;

  render() {
    return (
      <div>
        <TextCarousel />
        <HomeSectionOne />
        <GamingDisclaimer />
      </div>
    );
  }
}
