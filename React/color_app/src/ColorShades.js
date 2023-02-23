import React, { Component } from "react";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import "./css/ColorShades.css";
import Footer from "./Footer";

class ColorShades extends Component {
  render() {
    return (
      <div className="">
        <NavBar isPalettePage={false} />
        <div className="color-shade-container">
          {this.props.allShades.map((color) => (
            <ColorBox name={color.name} color={color.hex} isPalette={false} />
          ))}
        </div>
        <Footer paletteName={this.props.paletteName + " " + this.props.emoji} />
      </div>
    );
  }
}

export default ColorShades;
