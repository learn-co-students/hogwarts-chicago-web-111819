import React, { Component } from 'react';
import '../App.css';
import HogCard from './HogCard';

class HogContainer extends Component {

    renderHogs = () => {
        return this.props.hogs.map(hogData => {
            return <HogCard hog={hogData} />
        })
    }

  render() {
      console.log(this.props.hogs)
    return (
      <div className="ui grid container">
          {this.renderHogs()}

      </div>
    )
  }
}

export default HogContainer;
