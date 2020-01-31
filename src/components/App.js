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
      moreInfo: false,
      greasedHogs: false,
      sortOrder: "none"
    };
  }

  toggleGreasedHogs = () => {
    this.setState({
      greasedHogs: !this.state.greasedHogs
    });
  }

  toggleSortOrder = e => {
    let sortOption = e.target.value;
    this.setState({
      sortOrder: sortOption
    });
  }

  filterGreasedHogs = () => {
    const currentHogs = this.state.hogs;
    let filteredHogs = this.state.greasedHogs ? 
    currentHogs.filter(hog => hog.greased) : currentHogs;
    return filteredHogs;
  }

  sortHogs = currentHogs => {
    let sortedHogs = currentHogs;
    switch (this.state.sortOrder) {
      case "name":
        sortedHogs = currentHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name));
        break;

      case "weight":
        sortedHogs = currentHogs.sort((hog1, hog2) => hog1.weight - hog2.weight);
        break;

      default:
        break;
    }
    return sortedHogs;
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer
          filterHogs={this.toggleGreasedHogs}
          sortOrder={this.toggleSortOrder}
          currentHogs={this.sortHogs(this.filterGreasedHogs()) }
        />
      </div>
    );
  }
}

export default App;
