import React, { Component } from 'react';
import '../App.css';

class HogCard extends Component {

    constructor(){
        super()
        this.state = {
            showInfo: false
        }
    }

renderImage = () => {
    const imageName = this.props.hog.name.toLowerCase().replace(/\ /g, '_')
    const image = require(`../hog-imgs/${imageName}.jpg`)
    return <img src={image} />
}

renderInfo = () => {
    const { hog } = this.props
    return <div className="ui card">
    <p>Specialty: {hog.specialty}</p>
    <p>{hog.greased ? 'Greased' : 'Not Greased'}</p>
    <p>Weight: {hog.weight}</p>
    <p>Highest Medal: {this.props.hog['highest medal achieved'].toUpperCase()}</p>
    </div>
}

toggleInfo = () => {
    this.setState( prevState => {
        return {
            showInfo: !prevState.showInfo
        }
    })
}

  render() {
    return (
      <div className="pigTile">
          {this.renderImage()}
          <p>{this.props.hog.name}</p>
          {this.state.showInfo ? this.renderInfo() : null}
          <button onClick={this.toggleInfo}>{this.state.showInfo ? 'Less Info' : 'More Info'}</button>
          <button>Hide Me</button>
      </div>
    )
  }
}

export default HogCard;
