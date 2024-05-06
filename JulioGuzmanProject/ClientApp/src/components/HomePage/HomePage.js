import React, { Component } from "react";
import GamingDisclaimer from "../GamingDisclaimer";
import "./HomePage.css";
import TextCarousel from "./TextCarousel";

export class HomePage extends Component {
  static displayName = HomePage.name;

  render() {
    return (
      <div>
       <TextCarousel />

       <GamingDisclaimer />
      </div>
    );
  }
}
