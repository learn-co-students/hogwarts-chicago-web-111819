import React, { Component } from 'react';
import AddInfo from './AddInfo';

export default class HogTile extends Component {

  constructor() {
    super();
    this.state = {
      moreInfo: false
    };
  }

  sanitizeName = name => {
    return name.toLowerCase().split(" ").join("_");
  }

  toggleDisplay = () => {
    this.setState(prevState => {
      return {moreInfo: !prevState.moreInfo };
    });
  }

  render() {
    const currentHog = this.props.hog;
    const {name, specialty} = currentHog;
    const image = require(`../hog-imgs/${this.sanitizeName(name)}.jpg`);
    return (
      <div className="ui three wide column pigTile" style={{padding: "5px"}}>
        <div className="ui card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <span className="header hoggyText">{name}</span>
            <div className="meta">
              <span className="date">Specialty: {specialty}</span>
            </div>
          </div>
          { this.state.moreInfo ? <AddInfo hog={currentHog} /> : null }

          <div className="extra content">
            <button onClick={this.toggleDisplay}>{this.state.moreInfo ? "Less " : "More "} Info</button>
            <button onClick={() => this.props.hideHog(this.props.hog.name)}>Hide Me</button>
          </div>
        </div>

      </div>
    );
  }
}

