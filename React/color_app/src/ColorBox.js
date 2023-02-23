import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import "./css/ColorBox.css";

class ColorBox extends Component {
  static defaultProps = {
    isPalette: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    let { name, color } = this.props;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className="color-box" style={{ backgroundColor: color }}>
          <div className="copy-container">
            <p className="copy">Copy</p>
            <p className="color-name">{name}</p>
            {this.props.isPalette && (
              <Link
                to={`/palette/${this.props.paletteName}/${
                  this.props.name.split(" ")[0]
                }`}
                className="more"
              >
                More
              </Link>
            )}
          </div>
          <div
            className={`overlay ${this.state.copied && "active"}`}
            style={{ backgroundColor: color }}
          ></div>
          <div className={`copied-content ${this.state.copied && "active"}`}>
            <p className="copied">Copied</p>
            <p className="colorname">{color}</p>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
