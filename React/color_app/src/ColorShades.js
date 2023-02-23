import React, { Component } from "react";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import "./css/ColorShades.css";

class ColorShades extends Component {
  render() {
    return (
      <div className="">
        <NavBar isPalettePage={false} />
        <div className="color-shade-container">
          {this.props.color.map((color) => (
            <ColorBox name={color.name} color={color.hex} />
          ))}
        </div>
      </div>
    );
  }
}

export default ColorShades;
