import React, { Component } from 'react';
import './App.css';
import Score from './components/Score.js';
import Letters from './components/Letters.js';
import Solution from './components/Solution.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      score: 100,
      word: "CALM",
      hint: "Your prefered mood right now"
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  

  selectLetter = (letter) => {
    let letterStatus = {...this.state.letterStatus}
    letterStatus[letter] = true 
    
    this.setState({ letterStatus: letterStatus })
  }

  checkSelectedLetter = () => {
    let word = {...this.state.word}
    word.split("").forEach(letter => {
      if letter === letterStatus[letter]
      letter={letterStatus[letter] ? true: false}
    });(letter => {
      return (<Letter
          key={letter}
          letter={this.props.letterStatus[letter] ? letter: "_ " }  />)
  })
  }

  reduceScore = () => {
    this.setState({ score: this.state.score - 20 })
  }

  addScore = () => {
    this.setState({ score: this.state.score + 5 })
  }

  render() {
    return (
      <div>
        <Score word={this.state.word} letterStatus={this.state.letterStatus} reduceScore={this.reduceScore} addScore={this.addScore} />
        <Solution letterStatus={this.state.letterStatus} word={this.state.word} hint={this.state.hint} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
      </div>  
    )
  }
}

export default App;


// var loginButton;
// if (loggedIn) {
//   loginButton = <LogoutButton />;
// } else {
//   loginButton = <LoginButton />;
// }

// return (
//   <nav>
//     <Home />
//     {loginButton}
//   </nav>
// );