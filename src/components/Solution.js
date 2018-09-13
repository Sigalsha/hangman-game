import React, { Component } from 'react';
import Letter from './Letter.js';


class Solution extends Component {
    constructor() {
        super()
        this.state = {
            word: "word",
            hint: "some hint to help you guess"
        }
    }

    generateLetterTags() {
        return this.state.word.split("").map(letter => {
            return (<Letter letter={letter} key={letter} />)
        })
    }

    render() {
        console.log(this.props.letterStatus)
        return (
            <div>
                <div>{this.state.hint}</div>
                <span>{this.generateLetterTags()}</span>
            </div>
        )
    }
}

export default Solution;