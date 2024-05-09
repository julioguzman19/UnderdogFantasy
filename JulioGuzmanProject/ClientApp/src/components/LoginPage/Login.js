import React, { Component } from "react";
import { Link } from "react-router-dom";
import DogImage from "../../assets/dog.png";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import GamingDisclaimer from "../GamingDisclaimer";
import "./Login.css";

export class Login extends Component {
  static displayName = Login.name;

  state = {
    loginButtonStyles: {
      backgroundColor: "#d8d8d8",
      color: "#6b6b6b",
    },
    isEmailValid: false,
    isPasswordEntered: false,
  };

  enableLoginButton = () => {
    this.setState({
      loginButtonStyles: {
        backgroundColor: "#0ea023",
        color: "#f0f0f0",
      },
    });
  };

  disableLoginButton = () => {
    this.setState({
      loginButtonStyles: {
        backgroundColor: "#d8d8d8",
        color: "#6b6b6b",
      },
    });
  };

  updateLoginButton = () => {
    if (this.state.isEmailValid && this.state.isPasswordEntered) {
      this.enableLoginButton();
    } else {
      this.disableLoginButton();
    }
  };

  handleEmailChange = (isValid) => {
    this.setState({ isEmailValid: isValid }, this.updateLoginButton);
  };

  handlePasswordChange = (isEntered) => {
    this.setState({ isPasswordEntered: isEntered }, this.updateLoginButton);
  };

  render() {
    const isLoginButtonEnabled =
      this.state.isEmailValid && this.state.isPasswordEntered;
    return (
        <div className="login-container">
          <img src={DogImage} alt="Dog Image" />
          <h1 className="login-h1">
            UNDERDOG
            <br />
            FANTASY
          </h1>

          <label className="login-input-label">Email</label>
          <EmailInput onValidChange={this.handleEmailChange} />

          <label className="login-input-label">Password</label>
          <PasswordInput onPasswordChange={this.handlePasswordChange} />

          <Link className="login-forgot-password">Forgot Password?</Link>

          <LoginButton
            isEnabled={isLoginButtonEnabled}
            styles={this.state.loginButtonStyles}
          />

          <p className="sign-up-message">
            Don't have an account? <Link className="sign-up-link">Sign up</Link>
          </p>

          {/* Use a tag when re-directing outside website/app */}
          <p className="login-terms">
            If you or someone you know has a gambling problem, help is
            available.
            <br />
            Call 1-800-GAMBLER or go to{" "}
            <a href="https://www.ncpgambling.org">ncpgambling.org</a>.
          </p>
          <GamingDisclaimer />
        </div>
    );
  }
}
