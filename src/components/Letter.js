import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return ( <span onClick={this.props.deleteLetter}>{this.props.letter}</span> );
    }
}

export default Letter;