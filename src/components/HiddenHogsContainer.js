import React from 'react'
import HiddenHogCard from './HiddenHogCard'

export default class HiddenHogsContainer extends React.Component {

    renderHiddenHogs = () => {
        return this.props.hogs.map((hogObj, index) => {
            return <HiddenHogCard key={index} hog={hogObj} />
        })
    }

    render () {
        return (
            <div className="HiddenHogsContainer">
                {this.props.showHiddenHogsStatus ? this.renderHiddenHogs() : null}
            </div>
        )
    }
}