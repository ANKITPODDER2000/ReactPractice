import React, { Component } from "react";
import "./css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p className="palette-name">{this.props.paletteName}</p>
      </div>
    );
  }
}

export default Footer;
