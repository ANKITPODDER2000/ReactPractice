import React, { Component } from "react";
import Slider from "rc-slider";

import "./css/NavBar.css";
import "rc-slider/assets/index.css";
import ColorFormat from "./ColorFormat";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(val) {
    this.props.handleSliderValue(val);
  }
  render() {
    return (
      <div className="navbar-container">
        <div className="left-container">
          <a href="/" className="title">
            Color Picker
          </a>
          <p className="level">Level : {this.props.colorDensity}</p>
          <div className="slider-container">
            <Slider
              value={this.props.colorDensity}
              min={100}
              max={1000}
              step={100}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="right-container">
          <ColorFormat
            colorformat={this.props.colorformat}
            handleColorformat={this.props.handleColorformat}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
