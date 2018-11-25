import React, { Component } from 'react';
import '../styles/Letters.css'


class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
    }
    render() {
        return ( <span class="letter"
            className={this.props.class} onClick={this.selectLetter}>
            {this.props.letter}
            </span> );
    }
}

export default Letter;