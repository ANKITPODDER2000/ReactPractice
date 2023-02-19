import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';

import './css/App.css'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Palette {...SeedColors[4]} />
      </div>
    )
  }
}


export default App;