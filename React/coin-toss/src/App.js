import React, { Component } from 'react'
import './CSS/App.css'

let images = ['https://www.pcgs.com/UserImages/04436864o.jpg', 'https://www.pcgs.com/UserImages/04436864r.jpg']
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            numToss : 0,
            image_url : '',
            heads : 0,
            tails : 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    updateState(hc, tc, ind){
        this.setState(st => ({
            numToss : st.numToss + 1,
            heads : st.heads + hc,
            tails : st.tails + tc,
            image_url : images[ind]
        }))
    }
    handleClick(e){
        if(this.state.numToss === 10 ){
            this.setState({
                numToss : 0,
                image_url : '',
                heads : 0,
                tails : 0 
            })
            return;
        }
        let num = Math.floor(Math.random() * 10) % 2;
        if(num === 0) this.updateState(1,0,0);
        else this.updateState(0, 1, 1);
    }
  render() {
    return (
      <div className='container'>
        <div className='inner-container'>
            <h1>Let's Flip a Coin</h1>
            <div className='images'>
                {
                    this.state.numToss == 0
                    ?
                    <>
                        <img src={images[0]} />
                        <img src={images[1]} />
                    </>
                    : <img src={this.state.image_url} />
                }
            </div>
            <button onClick={this.handleClick}>
                {this.state.numToss === 0 ? 'Start Toss' : this.state.numToss === 10? 'Restart' : 'Flip Coin'}
            </button>
            <p>Out of {this.state.numToss} flips, there have been {this.state.heads} heads and {this.state.tails} tails</p>
        </div>
      </div>
    )
  }
}

export default App;
