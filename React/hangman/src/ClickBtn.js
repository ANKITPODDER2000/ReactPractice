import React, { Component } from 'react';
import './CSS/ClickBtn.css'

export default class ClickBtn extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClick : false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({isClick : true})
    this.props.handleClick(this.props.val);
  }
  render() {
    return (
      <div className='btn-container'>
        <button 
          className={(this.state.isClick || this.props.isPressed) ? `disable` : ''} 
          disabled={this.state.isClick} 
          onClick={this.handleClick}
        >
          {this.props.val}
        </button>
      </div>
    )
  }
}
