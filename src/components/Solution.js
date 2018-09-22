import React, { Component } from 'react';
import Letter from './Letter.js';


class Solution extends Component {

    generateLetterTags() {
        return Object.keys(this.props.word).map(letter => {
            return (<Letter
                key={letter}
                class="solutionLetter"
                letter={this.props.letterStatus[letter] ? letter: " _ " } />)
        })
    }

    render() {
        // console.log(this.props.letterStatus)
        return (
            <div>
                <div>{this.props.hint}</div>
                <span>{this.generateLetterTags()}</span>
            </div>
        )
    }
}

export default Solution;