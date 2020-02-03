import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {
  constructor(){
    super()
    // before saving the hogs data in the state modify it,
    // add a hidden => false attribute to all objects
    // write a function that updates this attribute on a single object
    // pass it on to the hogcard component, add it as event listener to button
    // filter the objects to the hogcontainer
    // => only render objects with hidden:false attribute
    const updatedHogsData = hogs.map(hogObj => {
      return {
        ...hogObj,
        hidden: false
      }
    })

    this.state = {
      hogs: updatedHogsData,
      showGreasedOnly: false,
      sortBy: ''
    }
  }

  toggleSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  toggleGreased = () => {
    this.setState(prevState => ({
      showGreasedOnly: !prevState.showGreasedOnly
    }))
  }

  hideHog = (name) => {
    const updatedHogs = this.state.hogs.map(hogObj => {
      if (hogObj.name === name) {
        return {
          ...hogObj,
          hidden: true
        }
      }

      return hogObj
    })

    this.setState({
      hogs: updatedHogs
    })
  }

  filteredHogs = () => {
    let filteredHogs = this.state.hogs

    if (this.state.showGreasedOnly) {
      return filteredHogs = filteredHogs.filter(hog => hog.greased)
    }

    if (this.state.sortBy === 'name') {
      
    }

    filteredHogs = filteredHogs.filter(hog => !hog.hidden)

    return filteredHogs
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter 
            toggleGreased={this.toggleGreased}
            toggleSort={this.toggleSort}
          />
          < HogContainer 
            hogs={this.filteredHogs()} 
            hideHog={this.hideHog}
          />
      </div>
    )
  }
}

export default App;
