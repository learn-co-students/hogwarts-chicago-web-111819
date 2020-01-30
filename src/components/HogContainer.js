import React, {Component} from 'react'
import HogCard from './HogCard'


export default class HogComponent extends Component {

    generateHogs = () => {
        return this.props.hogObjs.map(hogObj => {
            return <HogCard hogData={hogObj}/>
        })
    }

    render () {
        return (
            <div>
                {this.generateHogs()}
            </div>
        )
    }
}