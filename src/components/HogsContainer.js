import React, { Component } from 'react';
import HogTile from './HogTile';

export default class HogsContainer extends Component {

  render() {
    let sortOpts = ["---select---", "Name", "Weight"];
    return (
      <div>
        <div className="filterWrapper">
          <span><input type="checkbox" onChange={this.props.filterHogs} /> Show only greased hogs</span>
          <span className="separator"></span>Sort by &nbsp;
          <select onChange={this.props.sortOrder}>
            <option value={sortOpts[0]}>{sortOpts[0]}</option>
            <option value={sortOpts[1].toLowerCase()}>{sortOpts[1]}</option>
            <option value={sortOpts[2].toLowerCase()}>{sortOpts[2]}</option>
          </select>
          <button className="custom-btn" onClick={this.props.toggleHidden}>{this.props.hidden ? "Hide" : "Show"} Hidden Hogs</button>
        </div>
        <div className="ui grid container cards">
          { this.props.currentHogs.map((hogData, i) => <HogTile hog={hogData} key={i} hideHog={this.props.hideHog} />) }
        </div>
      </div>
    );
  }
}

