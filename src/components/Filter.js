import React, { Component } from 'react'

export default class Filter extends Component {
    // constructor() {
    //     super()

    //     // this.state = {

    //     // }
    // }

    render(){
        return (
            <div className="filterWrapper">
                <label>Show Greased Only?</label>
                <input type="checkbox" onChange={() => this.props.toggleGreased()}/>
            </div>
        )
    }
}