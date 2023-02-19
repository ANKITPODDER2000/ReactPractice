import React, { Component } from 'react';
import './CSS/GameTitle.css'

class GameTitle extends Component {
  render() {
    return (
      <div className='title-container'>
        <h1 className={this.props.result === 0 ? 'loss' : this.props.result === 1 ? 'win' : ''}>
          {
            this.props.result === -1 ? 
            'Hangman Game - For Programmer !' : 
            this.props.result === 0 ?
              'Oppps - Better luck next Time ...' :
              'Really you are great!!!'
          }
        </h1>
      </div>
    )
  }
}

export default GameTitle;