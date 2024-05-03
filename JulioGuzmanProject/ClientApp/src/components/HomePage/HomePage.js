import React, { Component } from "react";
import GamingDisclaimer from "../GamingDisclaimer";
import "./HomePage.css";

export class HomePage extends Component {
  static displayName = HomePage.name;

  state = {
    loginButtonStyles: {
      backgroundColor: "#d8d8d8",
      color: "#6b6b6b",
    },
    isEmailValid: false,
    isPasswordEntered: false,
  };

  

  render() {
    return (
      <div className="center">
       

       <GamingDisclaimer />
      </div>
    );
  }
}
