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
                <label>Sort By: </label>
                <select onChange={(e) => this.props.toggleSort(e)}>
                    <option value=""></option>
                    <option value="name">name</option>
                    <option value="heaviest">heaviest</option>
                    <option value="lightest">lightest</option>
                </select>
                <label>Show Greased Only?</label>
                <input type="checkbox" onChange={() => this.props.toggleGreased()}/>
            </div>
        )
    }
}