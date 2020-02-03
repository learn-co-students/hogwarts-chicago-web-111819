import React, { Component } from 'react';
import HiddenHogTile from './HiddenHogTile';
import {getRandomIntInclusive} from './Helpers';

export default class HiddenHogsContainer extends Component {
  render() {
    return (
      <div>
        <div className="ui grid container cards">
          { (() => {
            let data = [
              <p key={getRandomIntInclusive()} style={{width: "100%", display: "block", paddingBottom: "1%", paddingTop: "0.4%", marginLeft: "20%", borderTop: "1px dotted goldenrod", borderBottom: "1px dotted goldenrod"}}>Hidden hogs so far...</p>,
              this.props.currentHogs.map((hogData, i) => { return <HiddenHogTile hog={hogData} gifs={this.props.gifs} key={i} /> })
            ];

            if (this.props.currentHogs.length < 1) {
              data = <p style={{paddingBottom: "1%", paddingTop: "0.4%", marginLeft: "25%", borderTop: "1px dotted goldenrod"}}>There are no hidden hogs in here... Kill some of them from the available ones below <span role="img" aria-label="Tears of joy">&#128514;.</span> {/* Unicode: "U+1F602" */}</p>
            }
            return data;
            })() }
        </div>
      </div>
    );
  }
}

