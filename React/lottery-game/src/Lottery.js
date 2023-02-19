import React, { Component } from 'react';
import BallBox from './BallBox';
import './CSS/Lottery.css'

class Lottery extends Component {
    static defaulProps = {
        maxSize : 40
    }
    constructor(props){
        super(props);
        let nums = [];
        for(let i = 0; i < this.props.balls; i++) nums.push(this.getRandomNumber());
        this.state = {
            nums : nums
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();
    }
    getRandomNumber = () => Math.floor(Math.random() * 1000) % 40;
    handleClick(e){
        this.setState(st => ({nums : st.nums.map(num => this.getRandomNumber())}))
    }
  render() {
    return (
      <div className='lottery-container'>
        <p className='title'>{this.props.title}</p>
        <BallBox nums = {this.state.nums} />
        <button onClick={this.handleClick}>Generate New</button>
      </div>
    )
  }
}

export default Lottery;