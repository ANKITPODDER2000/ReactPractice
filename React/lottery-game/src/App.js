import React, { Component } from 'react'
import Lottery from './Lottery';
import './CSS/App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Lottery title = "Lotto" balls = {6}/>
        <Lottery title = "Mini Game" balls = {4}/>
      </div>
    )
  }
}

export default App;