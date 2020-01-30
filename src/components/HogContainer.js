import React, {Component} from 'react'
import HogCard from './HogCard'
import NavBar from './NavBar'
import hogObjs from '../porkers_data';



export default class HogComponent extends Component {
    state = {
        isChecked: false
    }
    
    changeGreaseBoxStatus = () => {
        this.setState({
            isChecked: true
        })
    }

    generateHogs = () => {
        return hogObjs.map(hogObj => {
            return <HogCard hogData={hogObj}/>
        })
    }

    render () {
        return (
            <div>
                < NavBar changeGreaseBoxStatus={this.changeGreaseBoxStatus}/>  
                {this.generateHogs()}
            </div>
        )
    }
}