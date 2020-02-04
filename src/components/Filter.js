import React, { Component } from 'react'

export default class Filter extends Component {

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
                <button onClick={() => this.props.toggleShowHiddenHogs()}>{this.props.showHiddenStatus ? 'Hide Hidden Hogs' : 'Show Hidden Hogs'}</button>
            </div>
        )
    }
}