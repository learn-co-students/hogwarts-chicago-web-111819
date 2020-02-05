import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'
import HogCard from './HogCard'

class App extends Component {

  constructor(){
    super()

    this.state = {
      hogs: hogs,
      showGreased: false,
      sortBy: ''
    }
  }

  filterHogs = () => {
    let filteredHogs = this.state.hogs

    if(this.state.showGreased) {
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    }
    if (this.state.sortBy === 'weight') {
      filteredHogs = filteredHogs.sort(function(hog1, hog2) {
        if (hog1.weight > hog2.weight) {
          return -1
        }
        else {
          return 1
        }
      })
    }

    if (this.state.sortBy === 'name') {
      filteredHogs = filteredHogs.sort(function(hog1, hog2) {
        if (hog1.name < hog2.name) {
          return -1
        }
        else {
          return 1
        }
      })
    }

    return filteredHogs
  }

  handleSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }


  toggleGreased = () => {
    this.setState( prevState => ({
      showGreased: !prevState.showGreased
    }))
  }

  render() {
    console.log(hogs, this.state)
    return (
      <div className="App">
          < Nav />
          <Filter showGreased={this.state.showGreased}
                  toggleGreased={this.toggleGreased}
                  handleSort={this.handleSort}/>
          <HogContainer hogs={this.filterHogs()} />
      </div>
    )
  }
}

export default App;