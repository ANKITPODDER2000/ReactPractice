import React, { Component } from 'react'
import ClickBtn from './ClickBtn';
import './CSS/Buttons.css'

export default class Buttons extends Component {
  render() {
    return (
      <div className='buttons-container'>
        {this.props.btns.map(
          v =>
           <ClickBtn 
              val = {v} 
              key={v} 
              handleClick = {this.props.handleClick} 
              isPressed = {this.props.score === 0 || this.props.pressedKeys.has(v)}
            />
          )
        }
      </div>
    )
  }
}
