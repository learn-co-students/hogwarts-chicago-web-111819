import React, { Component } from 'react';
import '../App.css';
import HogCard from './HogCard';

class Filter extends Component {


  render() {
    return (
      <div className="filterWrapper">
        <label>Greased Pigs Only?</label>
        <input 
        onChange={this.props.toggleGreased}
        type='checkbox' 
        checked={this.props.showGreased}
        />
        <select onChange={this.props.handleSort}>
          <option value=''></option>
          <option value='weight'>Weight</option>
          <option value='name'>Name</option>
        </select>
      </div>
    )
  }
}

export default Filter;
