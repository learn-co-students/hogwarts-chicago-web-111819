import React, { Component } from 'react';
import HogTile from './HogTile';

export default class HogsContainer extends Component {
  constructor() {
    super();
    this.state = {
      someCrap: null
    }
  }
  render() {
    return (
      <div>
      <div>
        <span><input type="checkbox" /> Show only greased hogs</span>
        <hr />
      </div>
      <div className="ui grid container cards">
        {
        this.props.currentHogs.map((hogData, i) => {
          return <HogTile hog={hogData} key={i} />
        })}
      </div>
      </div>
    );
  }
}

