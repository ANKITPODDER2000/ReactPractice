import React, { Component } from 'react'
import ColorBox from './ColorBox';

import './css/Palette.css'

class Palette extends Component {
  render() {
    return (
      <div className='palette-container'>
        <div className='color-box-container'>
            {this.props.colors.map(color => <ColorBox {...color} />)}
        </div>
      </div>
    )
  }
}

export default Palette;