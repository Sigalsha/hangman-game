import React, { Component } from 'react';
import Letter from './Letter.js';



class Letters extends Component {

    generateLetterTags(letterStatus) {
        return Object.keys(letterStatus).map(letter => {
            return (<Letter letter={letter} key={letter} />)
        })
    }

    render() {
        return (
            <div>
                <div>Letters will be here: </div>
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
