import React from 'react'

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <span>Sort By: </span>
                <select>
                    <option value="Name">Name</option>
                    <option value="Weight">Weight</option>
                </select>
                <span>Greased Pigs Only?</span>
                <input type="checkbox" />
                <button>Hidden Hogs</button>
            </div>
        )
    }
}