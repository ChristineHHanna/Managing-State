import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Score from './score'


class App extends Component {
  state = {
  	correctAnswers : 0,
    totalQuestions : 0
  }

handleAnswer = answerIsCorrect => {
 
  if(answerIsCorrect) {
    this.setState((currentstate) => ({
     correctAnswers : currentstate.correctAnswers +1 ,
    }))
  }
   this.setState((currentstate) => ({
      totalQuestions: currentstate.totalQuestions + 1,
    }))
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer}/>
          <Score numCorrect={this.state.correctAnswers} numQuestions={this.state.totalQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
