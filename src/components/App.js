import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogsContainer from './HogsContainer';
import hogs from '../porkers_data';
import HiddenHogsContainer from './HiddenHogsContainer';
import APIKEYS from '../private/ApiKeys';

class App extends Component {

  constructor() {
    super();

    const updatedHogs = hogs.map(hogObj => {
      return {
        ...hogObj,
        hidden: false
      }
    })

    this.state = {
      hogs: updatedHogs,
      moreInfo: false,
      greasedHogs: false,
      sortOrder: "name", /* sort by name by default */
      hiddenVisible: false,
      searchTerm: "pig",
      randomGifs: []
    };
  }

  toggleGreasedHogs = () => {
    this.setState({
      greasedHogs: !this.state.greasedHogs
    });
  }

  toggleSortOrder = e => {
    this.setState({
      sortOrder: e.target.value
    });
  }

  toggleHidden = () => {
    this.setState(prevState => {
      return {hiddenVisible: !prevState.hiddenVisible };
    });
  }

  filterHogs = () => {
    let filteredHogs = this.state.hogs

    if(this.state.greasedHogs) {
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    } 

    // don't show 'hidden' hogs
    filteredHogs = filteredHogs.filter(hog => !hog.hidden)

    return filteredHogs;
  }

  findHiddenHogs = () => {
    return this.state.hogs.filter(hog => hog.hidden);
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

  hideHog = hogName => {
    const updatedHogs = this.state.hogs.map( hog => {
      if (hog.name === hogName) {
        return {
          ...hog,
          hidden: true
        }
      } 
      return hog
    });

    this.setState({
      hogs: updatedHogs
    });

  }

  componentDidMount() {
    this.getData();
  }

  getData = (term = this.state.searchTerm) => {
    let apiKey = APIKEYS.hogwarts;
    let url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}&rating=g`;
    
    fetch(url)
      .then(response => response.json())
      .then(returnedData => {
        this.setState({
          searchTerm: term,
          randomGifs: returnedData.data /* .images.original.url */
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.hiddenVisible ? 
        <HiddenHogsContainer
          currentHogs={this.sortHogs(this.findHiddenHogs()) }
          hideHog={this.hideHog}
          gifs={this.state.randomGifs}
        />
        : null }
        <HogsContainer
          filterHogs={this.toggleGreasedHogs}
          sortOrder={this.toggleSortOrder}
          currentHogs={this.sortHogs(this.filterHogs()) }
          hideHog={this.hideHog}
          toggleHidden={this.toggleHidden}
          hidden={this.state.hiddenVisible}
        />
      </div>
    );
  }
}

export default App;
