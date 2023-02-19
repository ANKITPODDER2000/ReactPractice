import React, { Component } from 'react'
import Ball from './Ball';

import './CSS/BallBox.css';

class BallBox extends Component {
  render() {
    return (
      <div className='ballbox-container'>
        {this.props.nums.map(num => <Ball num = {num} />)}
      </div>
    )
  }
}

export default BallBox;