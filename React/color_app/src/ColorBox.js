import React, { Component } from 'react'

import './css/ColorBox.css'

class ColorBox extends Component {
  render() {
    return (
      <div className='color-box' style={{backgroundColor: this.props.color}}>
        <div className='copy-container'>
          <p className='copy'>Copy</p>
          <p className='color-name'>{this.props.name}</p>
          <p className='more'>More</p>
        </div>
      </div>
    )
  }
}

export default ColorBox;