import React, { Component } from "react";
import GamingDisclaimer from "../GamingDisclaimer";
import "./HomePage.css";

export class HomePage extends Component {
  static displayName = HomePage.name;

  render() {
    return (
      <div>
       

       <GamingDisclaimer />
      </div>
    );
  }
}
