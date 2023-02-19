import React, { Component } from 'react'
import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import './CSS/Hangman.css'

class Hangman extends Component {
  static defaultProps = {
    imgs : [img0, img1, img2, img3, img4, img5, img6, img7,img8,img9, img10]
  }
  render() {
    return (
      <div className='hangman'>
        <img src={this.props.imgs[this.props.wrong_guess]} alt='Hangman Poster' />
      </div>
    )
  }
}

export default Hangman;