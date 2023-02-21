import React, { Component } from "react";
import "./css/Footer.css";

export default class extends Component {
  render() {
    return (
      <div className="footer-container">
        <p className="palette-name">{this.props.paletteName}</p>
      </div>
    );
  }
}
