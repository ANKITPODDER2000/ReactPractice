import React, { Component } from 'react';
import './CSS/Dice.css'

class Dice extends Component {
  render() {
    return (
      <div className='dice'>
        <i className={`${this.props.dice} ${this.props.isActive}`}></i>
      </div>
    )
  }
}

export default Dice;