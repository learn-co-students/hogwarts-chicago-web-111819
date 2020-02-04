import React, { Component } from "react"

export default class HogCard extends Component {
    constructor() {
        super()
        this.state = {
            showMoreInfo: false
        }
    }

    renderImg = () => {
        const imgFilename = this.props.hog.name.split(" ").join("_").toLowerCase()
        const imgSrc = require(`../hog-imgs/${imgFilename}.jpg`)
        return <img src={imgSrc} alt={imgFilename} />
    }

    toggleMoreInfo = () => {
        this.setState(prevState => ({
            showMoreInfo: !prevState.showMoreInfo
        }))
    }

    renderMoreInfo = () => {
        return <div className="minPigTile">
            <h5>specialty: {this.props.hog.specialty}</h5>
            <h5>greased: {this.props.hog.greased ? 'slick' : 'no'}</h5>
            <h5>weight: {this.props.hog.weight}lbs</h5>
            <h5>highest medal achieved: <span className="achievementText">{this.props.hog['highest medal achieved']}</span></h5>
        </div>
    }

    render () {
        return (
            <div className="indexWrapper">
                <div className="pigTile">
                    {this.renderImg()}
                    <h3>{this.props.hog.name}</h3>
                    {this.state.showMoreInfo ? this.renderMoreInfo() : ''}
                    <button onClick={this.toggleMoreInfo}>{this.state.showMoreInfo ? 'Less Info' : 'More Info'}</button>
                    <button onClick={() => this.props.hideHog(this.props.hog.name)}>Hide Hog</button>
                </div>
            </div>
        )
    }
}