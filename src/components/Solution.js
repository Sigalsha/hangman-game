import React, { Component } from 'react';
import Letter from './Letter.js';


class Solution extends Component {

    generateLetterTags() {
        return this.props.word.split("").map(letter => {
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
                <span>{this.generateLetterTags()}</span>
                <div>{this.props.hint}</div>
            </div>
        )
    }
}

export default Solution;