import React from "react"

export default class HiddenHogCard extends React.Component {
    constructor(){
        super()
        this.state = {
            baconImg: ''
        }
    }

    componentDidMount = () => {
        return fetch('https://api.tenor.com/v1/random?q=bacon-gifs&key=ZI18DF3ZR53V&limit=1')
            .then(resp => resp.json())
            .then(gifObj => {
                this.setState({
                    baconImg: gifObj.results[0].media[0].gif.url
                })
            })
    }

    render () {
        return (
            <div className="hiddenHogCard">
                <img src={this.state.baconImg} alt={this.props.hog.name} height="250" width="250" />
                <h3>{this.props.hog.name}</h3>
            </div>
        )
    }
}