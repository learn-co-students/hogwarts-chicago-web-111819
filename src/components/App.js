import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <HogCard />

      </div>
    )
  }
}

export default App;
