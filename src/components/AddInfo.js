import React, { Component } from "react";

export default class AddInfo extends Component {
  render() {
    const {greased, weight} = this.props.hog;
    return (
      <div className="extra content">
        <div className="meta">
        <span className="subtleText">Greased:</span> <span className="normalText">{greased ? "Yes" : "No"}</span>
        </div>
        <div className="meta">
          <span className="subtleText">Weight:</span> <span className="normalText">{weight}</span>
        </div>
        <span className="subtleText">Highest medal achieved:</span>&nbsp;
        <span className="achievementText normalText">{this.props.hog['highest medal achieved']}</span>
      </div>
    );
  }
}