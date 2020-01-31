import React, { Component } from 'react';
import HogTile from './HogTile';

export default class HogsContainer extends Component {

  render() {
    let sortOpts = ["Name", "Weight"];
    return (
      <div>
      <div>
        <span><input type="checkbox" onChange={this.props.filterHogs} /> Show only greased hogs</span>
        &nbsp;|&nbsp;
        <select onChange={this.props.sortOrder}>
          <option value="---select---" disabled="disabled" defaultChecked={true}>---select---</option>
          <option value={sortOpts[0].toLowerCase()}>{sortOpts[0]}</option>
          <option value={sortOpts[1].toLowerCase()}>{sortOpts[1]}</option>
        </select>
        <hr />
      </div>
      <div className="ui grid container cards">
        { this.props.currentHogs.map((hogData, i) => <HogTile hog={hogData} key={i} />) }
      </div>
      </div>
    );
  }
}

