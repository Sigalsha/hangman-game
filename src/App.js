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
      hint: "Your prefered mood right now",
      guessWord: ""
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

    this.checkIfWordIncludesLetter(letter)

    this.setState({ letterStatus: letterStatus })
  }

  reduceScore = () => {
    this.setState({ score: this.state.score - 20 })
  }

  addScore = () => {
    this.setState({ score: this.state.score + 5 })
  }

  checkIfWordIncludesLetter = (letter) => {
    let word = this.state.word
    // this.checkGuessStatus()
    if (word.includes(letter)) {
      this.addScore()
      this.addToGuessWord(letter)
      
    } else {
      this.reduceScore()
    }

  }

  addToGuessWord = (letter) => {
    let guessWord = this.state.guessWord + letter
    console.log(guessWord + " , " + this.state.word)
    this.setState({guessWord: guessWord})
  }

   // checkGuessStatus = () => {
  //   let word = this.state.word
  //   let guessWord = this.state.guessWord
  //   if (word === guessWord) {
  //     return;
  //   }
  // } 
  
  render() {
    if (this.state.guessWord === this.state.word){
      return (
        <div className="success-message">
          <h1>You guessed the word! <br></br>
            Good Job!!!</h1>
        </div>
      )
    } else if (this.state.score === 0) {
      return (
        <div className="game-over">
          <h1>Too bad, game over...<br></br> 
              The hidden word was: {this.state.word}</h1>
        </div>
      )
    } else { 
        return (
          <div>
            <Score score={this.state.score} />
            <Solution letterStatus={this.state.letterStatus} word={this.state.word} hint={this.state.hint} />
            <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
          </div>  
        )
      }  
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