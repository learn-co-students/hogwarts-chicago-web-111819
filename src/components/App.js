import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogsContainer from './HogsContainer';
import hogs from '../porkers_data';

class App extends Component {

  constructor() {
    super();
    this.state = {
      hogs: hogs,
      moreInfo: false
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer currentHogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
