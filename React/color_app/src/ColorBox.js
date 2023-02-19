import React, { Component } from 'react'

import './css/ColorBox.css'

class ColorBox extends Component {
  render() {
    return (
      <div className='color-box' style={{backgroundColor:this.props.color}}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default ColorBox;