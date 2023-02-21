import React, { Component } from "react";
import ColorBox from "./ColorBox";
import ConfirmBox from "./ConfirmBox";
import NavBar from "./NavBar";

import "./css/Palette.css";
import Footer from "./Footer";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorDensity: 500,
      open: false,
      colorformat: "hex",
    };
    this.handleSliderValue = this.handleSliderValue.bind(this);
    this.handleColorformat = this.handleColorformat.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSliderValue(val) {
    this.setState({
      colorDensity: val,
    });
  }
  handleClose() {
    this.setState({ open: false });
  }
  handleColorformat(val) {
    this.setState({ colorformat: val, open: true });
  }
  render() {
    return (
      <div className="palette-container">
        <NavBar
          colorDensity={this.state.colorDensity}
          handleSliderValue={this.handleSliderValue}
          colorformat={this.state.colorformat}
          handleColorformat={this.handleColorformat}
        />
        <div className="color-box-container">
          {this.props.colorShade[this.state.colorDensity].map((color) => (
            <ColorBox name={color.name} color={color[this.state.colorformat]} />
          ))}
        </div>
        <ConfirmBox open={this.state.open} handleClose={this.handleClose} />
        <Footer paletteName={this.props.paletteName + " " + this.props.emoji} />
      </div>
    );
  }
}

export default Palette;
