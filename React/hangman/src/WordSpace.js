import React, { Component } from 'react'
import './CSS/WordSpace.css';
import Word from './Word';

export default class WordSpace extends Component {
  render() {
    return (
      <div className='word-container'>
        {this.props.word.map(w => <Word val = {w} />)}
      </div>
    )
  }
}
