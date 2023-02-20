import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./css/Palette.css";

class Palette extends Component {
  render() {
    return (
      <div className="palette-container">
        <div className="color-box-container">
          {this.props.colorShade[this.props.colorDensity].map((color) => (
            <ColorBox {...color} />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;
