import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <NavBar />
          
      </div>
    )
  }
}

export default App;
