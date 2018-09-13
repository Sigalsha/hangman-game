import React, { Component } from 'react';
import Letter from './Letter.js';

class Letters extends Component {

    generateLetterTags() {
        const letterStatus = this.props.letterStatus
        return Object.keys(letterStatus).map(letter => {
            return (<Letter
                key={letter}
                class={letterStatus[letter] ? "selected" : null} 
                letter={letter} 
                selectLetter={this.props.selectLetter} />)
        })
    }

    render() {
        return (
            <div>
                <div>Available Letters: </div>
                {this.generateLetterTags(this.props.letterStatus)}
            </div>
        );
    }
}

export default Letters;

//   My function - to check if the same: 
// generateLetterTags(letterStatus) {
//     const letters = Object.keys(letterStatus);
//     const letterTags = letters.map(letter => <Letter letter={letter}/>);
//     return letterTags;
// }
