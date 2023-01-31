import React, { Component } from 'react';
import Button from './Button';
import Dice from './Dice';

import './CSS/App.css'
const diceFace = ['fas fa-dice-one', 'fas fa-dice-two',
    'fas fa-dice-three', 'fas fa-dice-four', 'fas fa-dice-five',
    'fas fa-dice-six'];
class App extends Component {
    constructor(props){
        super(props);
        let rand1 = Math.floor(Math.random() * 100) % 6, 
            rand2 = Math.floor(Math.random() * 100) % 6;
        this.state = {
            dice1 : diceFace[rand1],
            dice2 : diceFace[rand2],
            btnClick : false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let rand1 = Math.floor(Math.random() * 100) % 6, 
            rand2 = Math.floor(Math.random() * 100) % 6;
        this.setState({
            btnClick: true
        })
        setTimeout(() => this.setState({
            dice1 : diceFace[rand1],
            dice2 : diceFace[rand2],
            btnClick : false
        }), 1000)
    }
    render() {
        return (
            <div className='container'>
                <div className='dice-container'>
                    <Dice dice = {this.state.dice1} isActive={this.state.btnClick && 'is-active'} />
                    <Dice dice = {this.state.dice2} isActive={this.state.btnClick && 'is-active'}/>
                </div>
                <Button isActive={this.state.btnClick && 'is-active'} handleClick = {this.handleClick}/>
            </div>
        )
    }
}

export default App;