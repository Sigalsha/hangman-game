import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Score from './components/Score.js';
import Letters from './components/Letters.js';


class App extends Component {
  render() {
    return (
      <div>
        <Score />
        <Letters />
      </div>  
    )
  }
}

export default App;
