import React, { Component } from 'react';
import './App.css';
import Score from './components/Score.js';
import Letters from './components/Letters.js';
import Solution from './components/Solution.js';
import Letter from './components/Letter.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      score: 100
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  

  deleteLetter = () => {
    let letterStatus = this.state.letterStatus
    const letters = Object.keys(letterStatus)
    let firstLetter = letters[0]  

    delete letterStatus[firstLetter]

    this.setState({ letterStatus: letterStatus })
  }

  reduceScore = () => {
    this.setState({ score: this.state.score - 10 })
  }

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} />
        <Letters letterStatus={this.state.letterStatus} deleteLetter={this.deleteLetter} />
        {/* <Letter onClick={this.deleteLetter} /> */}
        {/* <button onClick={this.deleteLetter}>Remove First</button> */}
        {/* <button onClick={this.reduceScore}>reduce score</button> */}
      </div>  
    )
  }
}

export default App;
