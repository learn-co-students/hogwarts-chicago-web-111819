import React from 'react'
import HogCard from './HogCard'

export default class HogContainer extends React.Component {

    renderHogs = () => {
        return this.props.hogs.map((hogObj, index) => {
            return <HogCard key={index} hog={hogObj} hideHog={this.props.hideHog}/>
        })
    }
    render() {
        return (
            <div className="hogContainer">
                {this.renderHogs()}
            </div>
        )
    }
}