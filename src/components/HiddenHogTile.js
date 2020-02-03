import React, { Component } from 'react';
import {getRandomIntInclusive} from './Helpers';

export default class HiddenHogTile extends Component {

  sanitizeName = name => {
    return name.toLowerCase().split(" ").join("_");
  }

  getRandomGifUrl(gifs) {
    return gifs[getRandomIntInclusive(0, gifs.length - 1)].images.original.url;
  }

  render() {
    const currentHog = this.props.hog;
    const {name} = currentHog;
    const image = this.getRandomGifUrl(this.props.gifs);
    return (
      <div className="ui three wide column pigTile hiddenPigOutline" style={{padding: "5px"}}>
        <div className="ui card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <span className="header hoggyText">R.I.P. {name}</span>
          </div>
        </div>
      </div>
    );
  }
}

