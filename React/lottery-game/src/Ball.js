import React, { Component } from 'react';
import './CSS/Ball.css'

class Ball extends Component {
  render() {
    return (
      <div className='ball'>
        <p>{this.props.num}</p>
      </div>
    )
  }
}

export default Ball;