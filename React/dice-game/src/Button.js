import React, { Component } from 'react';
import './CSS/Button.css'

class Button extends Component {
  render() {
    return (
      <div className='btn-container'>
        <button className={`btn ${this.props.isActive}`} onClick={this.props.handleClick} disabled={this.props.isActive}>
            {this.props.isActive ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    )
  }
}

export default Button;