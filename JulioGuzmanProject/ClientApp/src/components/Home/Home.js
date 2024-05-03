import React, { Component } from "react";
import { Link } from "react-router-dom";
import DogImage from "../../assets/dog.png";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import "./Home.css";
import LoginButton from "./LoginButton";

export class Home extends Component {
  static displayName = Home.name;

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
      <div className="center">
        <div className="content">
          <img src={DogImage} alt="Dog Image" />
          <h1>
            UNDERDOG
            <br />
            FANTASY
          </h1>

          <label>Email</label>
          <EmailInput onValidChange={this.handleEmailChange} />

          <label>Password</label>
          <PasswordInput onPasswordChange={this.handlePasswordChange} />

          <Link className="password-reset-link">Forgot Password?</Link>

          <LoginButton
            isEnabled={isLoginButtonEnabled}
            styles={this.state.loginButtonStyles}
          />

          <p className="sign-up-message">
            Don't have an account? <Link className="sign-up-link">Sign up</Link>
          </p>

          {/* Use a tag when re-directing outside website/app */}
          <p>
            If you or someone you know has a gambling problem, help is
            available.
            <br />
            Call 1-800-GAMBLER or go to{" "}
            <a href="https://www.ncpgambling.org">ncpgambling.org</a>.
          </p>

          <div className="responsible-gaming-container">
            <p className="responsible-gaming-terms">
              <b className="color-gold">Underdog Responsible Gaming</b>
              <br />
              <b>Concerned with your play?</b>
              <br />
              Call 1-800-GAMBLER or visit{" "}
              <a href="https://www.ncpgambling.org">www.ncpgambling.org</a>; AZ:
              1-800-NEXT-STEP (1-800-639-8783) or text NEXT-STEP to 53342; NY:
              Call the 24/7 HOPEline at 1-877-8-HOPENY or Text HOPENY (467369)
              Learn more about Underdog Contests and how to identify highly
              experienced players at{" "}
              <a href="https://www.underdogfantasy.com/rules">
                www.underdogfantasy.com/rules
              </a>
              ; Learn more about average results at{" "}
              <a href="https://www.underdogfantasy.com/average-results">
                www.underdogfantasy.com/average-results
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}
