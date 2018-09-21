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
      word: {"C": false, "A": false, "L": false, "M": false},
      hint: "Your prefered mood right now",
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
  
  generateWord = () => {
    let hiddenWord = this.revealHiddenWord()
    let word = {...this.state.word}
    const wordList = [...this.state.wordList]
    for (let w=0; w < wordList.length - 1 ; w++) {
      if (hiddenWord === wordList[w]) {
        let nextWord = wordList[w + 1]
        word = {};
        for (let l of nextWord) {
          word[l] = false;
        }
        return word;  
      }
    }
  }

  generateHint = () => {
    let hint = this.state.hint
    const hintList = [...this.state.hintList]
    for (let h=0; h < hintList.length - 1; h++) {
      if (hint === hintList[h]) {
        return hintList[h + 1];
      } 
    }
    return hintList[0];
  } 

  spliceList = (item, list) => {
    for (let item in list) {
      list.splice(item, 1)
    }
    return list;
  }

  selectLetter = (letter) => {
    let letterStatus = {...this.state.letterStatus};
    let score = this.state.score;
    let word = {...this.state.word};
    letterStatus[letter] = true
    if (word.hasOwnProperty(letter) === true) {
      word[letter] = true
      score += 5
    } else {
      score -= 20
    }
    this.setState({ 
      letterStatus: letterStatus,
      word: word,
      score: score
    })
  }

  checkGuessWordStatus = () => {
    let word = {...this.state.word}
    for (let letter in word) {
      if (word[letter] === false) {
        return false
      } 
    }
    return true;
  }  

  revealHiddenWord = () => {
    let word = {...this.state.word}
    let hiddenWord = "";
    for (let letter in word) {
      hiddenWord += letter
    }
    return hiddenWord
  }

  startOver = () => {
    let letterStatus = {...this.state.letterStatus}
    letterStatus = this.generateLetterStatuses()
    let hint = this.generateHint()
    let word = this.generateWord()
    let wordList = this.spliceList(this.revealHiddenWord(), [...this.state.wordList])
    let hintList = this.spliceList(this.state.hint, [...this.state.hintList]) 

    this.setState({
      letterStatus: letterStatus,
      word: word,
      hint: hint,
      wordList: wordList,
      hintList: hintList 
    })
  }

  render() {
    let hiddenWord =  this.revealHiddenWord()
    if (this.checkGuessWordStatus() === true){
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
                The hidden word was: {hiddenWord}</h1>
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