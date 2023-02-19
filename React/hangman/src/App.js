import React, { Component } from 'react'
import Buttons from './Buttons';
import GameTitle from './GameTitle';
import Hangman from './Hangman';
import words from './Words';
import WordSpace from './WordSpace';
import './CSS/App.css';

class App extends Component {
  static defaultProps = {
    clickBtns : "ABCDEfGHIJKLMNOPQRSTUVWXYZ".toUpperCase().split(''),
    gameOver  : 10
  }
  constructor(props) {
    super(props);
    let rand = Math.floor(Math.random() * 1000) % words.length;
    let word = words[rand];
    let word_to_show = '';
    for(let i = 0; i < word.word.length; i++) {
      if(word.word[i] === ' ') word_to_show += '  ';
      else word_to_show += '_';
    }
    this.state = {
      word : word.word.toUpperCase(),
      word_to_show : word_to_show.split(''),
      wrong_guess : 0,
      result : -1,
      pressedKeys : new Set()
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClickHelper = this.handleClickHelper.bind(this);
  }
  handleClickHelper(val){
    if(this.state.word.search(val) === -1) {
      this.setState(
        st => ({wrong_guess : st.wrong_guess + 1}) ,
        () => {
          console.log(this.state.wrong_guess === this.props.gameOver);
        if(this.state.wrong_guess === this.props.gameOver) {
          let word_to_show = '';
          for(let i = 0; i < this.state.word.length; i++) {
            if(this.state.word_to_show[i] === ' ' || (this.state.word_to_show[i] >= 'A' && this.state.word_to_show[i] <= 'Z') ) 
              word_to_show += this.state.word_to_show[i];
            else word_to_show += this.state.word[i].toLowerCase();
          }
          this.setState({result : 0, word_to_show : word_to_show.split('')});
        }
      })
    }
    else{
      let wts = '';
      for(let i = 0; i < this.state.word.length; i++){
        if(this.state.word[i] === val) wts += val;
        else wts += this.state.word_to_show[i];
      }
      this.setState({word_to_show : wts.split('')});
      if(wts === this.state.word) {
        this.setState({result : 1});
        return 0;
      }
    }
  }
  handleClick(val){
    if(this.state.result > -1 || this.state.pressedKeys.has(val)) return;
    this.setState(st => ({
      pressedKeys : st.pressedKeys.add(val)
    }), () => this.handleClickHelper(val))
    
  }
  handleClick2(e){
    if(e.key.length === 1 && e.key.toUpperCase() >= 'A' && e.key.toUpperCase() <= 'Z')
      this.handleClick(e.key.toUpperCase());
  }
  render() {
    return (
      <div className='container' onKeyDown={this.handleClick2} tabIndex="0">
        <GameTitle result = {this.state.result}/>
        <Hangman wrong_guess = {this.state.wrong_guess}/>
        <WordSpace word = {this.state.word_to_show}/>
        <Buttons btns = {this.props.clickBtns} handleClick = {this.handleClick} score = {this.state.result} pressedKeys = {this.state.pressedKeys}/>
      </div>
    )
  }
}

export default App;