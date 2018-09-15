import React, { Component } from 'react';

class Score extends Component {

    renderScoreClass() {
        if(this.props.score >= 80) {
          return "high-score";
        } else if (this.props.score < 50) {
          return "low-score";
        } else {
            return "medium-score";
        }  
    }

    render() {
        return ( <div className={this.renderScoreClass()}><strong>{this.props.score}</strong></div> );
    }    
}   

export default Score;


