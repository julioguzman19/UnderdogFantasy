import React, { Component } from "react";
import { Link } from "react-router-dom";
import DogImage from "../../assets/dog.png";
import EmailInput from "./EmailInput";
import "./Home.css";

export class Home extends Component {
  static displayName = Home.name;

  state = {
    loginButtonStyles: {
      backgroundColor: "#d8d8d8",
      color: "#6b6b6b",
    },
    isEmailValid: false,
    isPasswordEntered: false,
    passwordType: "password",
    toggleIconClass: "bi-eye-fill",
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
      console.log("enabled");
      this.enableLoginButton();
    } else {
      this.disableLoginButton();
    }
  };

  handlePasswordBlur = (event) => {
    const passwordValue = event.target.value.trim();
    this.setState(
      {
        isPasswordEntered: passwordValue.length > 0,
      },
      () => {
        this.updateLoginButton();
      }
    );
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordType: prevState.passwordType === "password" ? "text" : "password",
      toggleIconClass:
        prevState.toggleIconClass === "bi-eye-fill"
          ? "bi-eye-slash"
          : "bi-eye-fill",
    }));
  };

  handleValidEmailChange = (isValid) => {
    this.setState({ isEmailValid: isValid }, this.updateLoginButton);
};

  render() {
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
          <EmailInput onValidChange={this.handleValidEmailChange} />

          <label>Password</label>
          <div class="input-group">
            <input
              type={this.state.passwordType}
              class="form-control"
              id="passwordId"
              onBlur={this.handlePasswordBlur}
            />
            <span
              class="input-group-text"
              onClick={this.togglePasswordVisibility}
            >
              <i className={`bi ${this.state.toggleIconClass}`}></i>
            </span>
          </div>

          <Link className="password-reset-link">Forgot Password?</Link>

          <button id="loginButtonId" style={this.state.loginButtonStyles}>
            Log In
          </button>

          <p className="sign-up-message">
            Don't have an account? <Link className="sign-up-link">Sign up</Link>
          </p>

          {/* Use a tag when re-directing outside website/app */}
          <p>
            If you or someone you know has a gambling problem, help is
            available.
            <br />
            Call 1-800-GAMBLER or go to <a>ncpgambling.org.</a>
          </p>

          <div className="responsible-gaming-container">
            <p className="responsible-gaming-terms">
              <b className="color-gold">Underdog Responsible Gaming</b>
              <br />
              <b>Concerned with your play?</b>
              <br />
              Call 1-800-GAMBLER or visit www.ncpgambling.org; AZ:
              1-800-NEXT-STEP (1-800-639-8783) or text NEXT-STEP to 53342; NY:
              Call the 24/7 HOPEline at 1-877-8-HOPENY or Text HOPENY (467369)
              Learn more about Underdog Contests and how to identify highly
              experienced players at www.underdogfantasy.com/rules; Learn more
              about average results at www.underdogfantasy.com/average-results
            </p>
          </div>
        </div>
      </div>
    );
  }
}
