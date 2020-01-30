import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import NavBar from './NavBar';
import HogContainer from './HogContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < NavBar />    
          < HogContainer hogObjs={hogs}/>

      </div>
    )
  }
}

export default App;
