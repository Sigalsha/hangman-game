import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Score from './components/Score.js';
import Letters from './components/Letters.js';
import Solution from './components/Solution.js';

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

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Letters letterStatus={this.state.letterStatus} />
        <button onClick={this.deleteLetter}>Remove First</button>
        <Solution solution={this.state.letterStatus} />
      </div>  
    )
  }
}

export default App;
