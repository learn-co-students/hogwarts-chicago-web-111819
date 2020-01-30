import React, {Component} from 'react'
import HogCard from './HogCard'
import Filter from './Filter'
import hogObjs from '../porkers_data';



export default class HogContainer extends Component {
    constructor(){
        super()
        this.state = {
            isChecked: false
        }
    }

    changeGreaseBoxStatus = () => {
        this.setState({
            isChecked: true
    })
    }

    renderHogs = () => {
        return hogObjs.map(hogObj => {
            return <HogCard hogData={hogObj}/>
        })
    }

    renderFilteredHogs = () => {
        return hogObjs.map(hogObj => {

        })
    }

    render () {
        return (
            <div>
                < Filter changeGreaseBoxStatus={this.changeGreaseBoxStatus}/>  
                {this.renderHogs()}
            </div>
        )
    }
}