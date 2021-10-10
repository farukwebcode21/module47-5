import React, { Component } from 'react'

class Card2 extends Component {
    render() {
        return (
            <div>
                <h1>This is Class Components</h1>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
export default Card2;
