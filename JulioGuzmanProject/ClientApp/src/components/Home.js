import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="background-color center">
        <div className="content">
          <img src="image.jpg" alt="Image goes here" />
          <h1>
            UNDERDOG
            <br />
            FANTASY
          </h1>

          <label>Email</label>
          {/* TODO: Possibly remove placeholder or label which ever looks better on phone */}
          <input placeholder="Email" />
          <label>Password</label>
          <input placeholder="Password" />
          <button>Log In</button>

          <Link>Forgot Password</Link>
          <span>or</span>
          <p>
            Don't have an account? <Link>Sign up</Link>
          </p>
          {/* Use a tag when re-directing outside website/app */}
          <p>
            If you or someone you know has a gambling problem, help is
            available. Call 1-800-GAMBLER or go to <a>ncpgambling.org.</a>
          </p>
          <div>
            <p>Underdog Responsible Gaming</p>
            <p>Concerned with your play?</p>
            <p>Concerned with your play? Call 1-800-GAMBLER or visit www.ncpgambling.org; AZ: 1-800-NEXT-STEP (1-800-639-8783) or text NEXT-STEP to 53342; NY: Call the 24/7 HOPEline at 1-877-8-HOPENY or Text HOPENY (467369) Learn more about Underdog Contests and how to identify highly experienced players at www.underdogfantasy.com/rules; Learn more about average results at www.underdogfantasy.com/average-results</p>
          </div>
        </div>
      </div>
    );
  }
}
