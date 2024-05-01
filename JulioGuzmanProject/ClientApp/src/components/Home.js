import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends Component {
  static displayName = Home.name;

  handleEmailBlur = (event) => {
    const emailInput = event.target;
    const emailErrorMessageId = document.getElementById("emailErrorMessageId");
    const emailInputId = document.getElementById("emailInputId");

    if (
      !this.isValidEmail(emailInput.value.trim()) &&
      !this.isBlank(emailInput.value.trim())
    ) {
      emailErrorMessageId.style.display = "block";
      emailInputId.style.borderColor = "#c02419";
    } else {
      emailErrorMessageId.style.display = "none";
      emailInputId.style.borderColor = "#d8d8d8";
    }
  };

  isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  isBlank = (value) => {
    return value === "";
  };

  render() {
    return (
      <div className="center">
        <div className="content">
          <img src="image.jpg" alt="Image goes here" />
          <h1>
            UNDERDOG
            <br />
            FANTASY
          </h1>

          <label>Email</label>
          {/* TODO: Possibly remove placeholder or label which ever looks better on phone */}
          <input
            id="emailInputId"
            type="email"
            name="Email"
            required
            onBlur={this.handleEmailBlur}
          />
          <div id="emailErrorMessageId">Please use a valid email.</div>

          <label>Password</label>
          <input />
          <Link className="password-reset-link">Forgot Password?</Link>

          <button>Log In</button>

          <p className="sign-up-message">
            Don't have an account? <Link className="sign-up-link">Sign up</Link>
          </p>

<input />
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
