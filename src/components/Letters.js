import React, { Component } from 'react';
import Letter from './Letter.js';



class Letters extends Component {

    generateLetterStatuses() {
        let letterStatus = {}
        for (let i = 65; i < 91; i++) {
          letterStatus[String.fromCharCode(i)] = false
        }
        return letterStatus
    }

    generateLetterTags(letterStatus) {
        return Object.keys(letterStatus).map(letter => {
            return (<Letter letter={letter} key={letter} />)
        })
    }

    render() {
        let letterStatus = this.generateLetterStatuses()
        return (
            <div>
                <div>Letters will be here: </div>
                {this.generateLetterTags(letterStatus)}
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
