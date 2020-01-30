import React from 'react';


export default class HogCard extends React.Component {

    heartBoi = (e) => {
        if (e.target.innerText === '♡'){
            e.target.innerText = '♥'
        } else if (e.target.innerText === '♥'){
            e.target.innerText = '♡'
        }
    }

    slugger = () => {
        let names = this.props.hogData.name.split(" ")
        names = names.map(word=> {
            return word.toLowerCase()
        })
        let slugged = names.join('_')
        return slugged
    }

    generateHog = () => {
        return(
            <div className="ui card">
                <div className="image">
                    <img src={require(`../hog-imgs/${this.slugger()}.jpg`)} />
                </div>
                <div>
                    <h1>{this.props.hogData.name}</h1>
                </div>
                <div className="image">
                </div>
                <div className="content">
                    <p>Specialty: {this.props.hogData.specialty}</p>
                    <button>More Info</button><button>Hide Me</button>
                </div>
                <div className="extra content">
                    <p onClick={this.heartBoi}>♡</p>
                </div>
            </div>
        )
    }

    render () {
        return (
            this.generateHog()
        )
    }
}
// ♥