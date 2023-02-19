import React, { Component } from 'react';
import './CSS/Word.css'

export default class Word extends Component {
  render() {
    return (
      <div className='word-wrapper'>
        <p className={this.props.val == '_' ? '' : this.props.val == this.props.val.toLowerCase() ? 'wrong' : 'correct'}>{this.props.val.toUpperCase()}</p>
      </div>
    )
  }
}
