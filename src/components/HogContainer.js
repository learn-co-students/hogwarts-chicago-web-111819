import React, {Component} from 'react'
import HogCard from './HogCard'
import Filter from './Filter'
import hogObjs from '../porkers_data';



export default class HogContainer extends Component {
    constructor(){
        super()
        this.state = {
            greasedFilter: false
            // hogs: hogObjs
        }
    }

    changeGreaseBoxStatus = () => {
         this.setState(prevState => {
             return (
                {greasedFilter: !prevState.greasedFilter}
             )
    })
}

    renderHogs = () => {
        // const hogsToShow = hogs
        // if greased take this.stte.hogs and remove the greased and thn pass 
        return hogObjs.map((hogObj, index) => {
            return <HogCard key={index} hogData={hogObj}/>
        })
    }

    renderFilteredHogs = () => {
        return hogObjs.map((hogObj, index) => {
            if (hogObj.greased === true) {
                return <HogCard key={index} hogData={hogObj} />
            } 
        })
    }

    render () {
        return (
            <div>
                < Filter changeGreaseBoxStatus={this.changeGreaseBoxStatus}/>  
                
                {this.state.greasedFilter === true ? this.renderFilteredHogs() : this.renderHogs()}
            </div>
        )
    }
}