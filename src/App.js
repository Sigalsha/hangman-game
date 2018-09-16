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
      guessWord: "",
      wordList: ["CALM", "BLUES", "MILK", "TANGO"] ,
      hintList: ["Your prefered mood right now", "American music genre", "Drink it", "Elegant dance"]
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
    if (word.includes(letter)) {
      this.addScore()
      this.addToGuessWord(letter)
      
    } else {
      this.reduceScore()
    }

  }

  addToGuessWord = (letter) => {
    let guessWord = this.state.guessWord + letter
    this.setState({guessWord: guessWord})
  }

  checkGuessStatus = () => {
    let word = this.state.word.split("").sort()
    let guessWord = this.state.guessWord.split("").sort()
    let count = 0
    for (let i=0; i < guessWord.length; i++) {
      if (guessWord[i] === word[i]) {
        count++
      }
    }
    if (count === word.length) {
      return true;
    } else {
      return false;
    }
  }    

  generateWord = () => {
    let word = this.state.word
    let wordList = [...this.state.wordList]
    for (let i = 0; i < wordList.length; i++) {
      if (word === wordList[i]) {
        word = wordList[i + 1];
      }
    }
    this.setState({wordList: wordList})
    this.setState({ word: word})
  }

  generateHint = () => {
    let hint = this.state.hint
    let hintList = [...this.state.hintList]
    for (let i = 0; i < hintList.length; i++) {
      if (hint === hintList[i]) {
        hint = hintList[i + 1];
      }
    }
    this.setState({hintList: hintList})
    this.setState({ hint: hint})
  }

  startOver = () => {
    this.generateWord()
    this.generateHint()
    let letterStatus = {...this.state.letterStatus}
    letterStatus = this.generateLetterStatuses()
    this.setState({letterStatus: letterStatus})
    let guessWord = this.state.guessWord
    guessWord = ""
    this.setState({guessWord: guessWord})
  }
  
  render() {
    if (this.checkGuessStatus() === true){
      return (
        <div>
          <div className="success-message">
            <h1>You guessed the word! <br></br>
              Good Job!!!</h1>
          </div>
          <br></br>
          <div className="restart" onClick={this.startOver}>start-over</div>
        </div>
         
      )
    } else if (this.state.score <= 0) {
      return (
        <div>
          <div className="game-over">
            <h1>Too bad, game over...<br></br> 
                The hidden word was: {this.state.word}</h1>
          </div>
          <br></br>
          <div className="restart" onClick={this.startOver}>start-over</div>
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