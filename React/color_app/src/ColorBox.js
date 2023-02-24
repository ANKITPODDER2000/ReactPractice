import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import withStyles from "react-jss";
import { Link } from "react-router-dom";

import style from "./css/ColorBox";

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
    let { name, color, classes } = this.props;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className={classes.colorBox} style={{ backgroundColor: color }}>
          <div className={classes.copyContainer}>
            <p className={classes.copy}>Copy</p>
            <p className={classes.colorName}>{name}</p>
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
            className={`${classes.overlay} ${
              this.state.copied && classes.active1
            }`}
            style={{ backgroundColor: color }}
          ></div>
          <div
            className={`${classes.copiedContent} ${
              this.state.copied && classes.active2
            }`}
          >
            <p className={classes.copied}>Copied</p>
            <p className={classes.copiedColorname}>{color}</p>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(style)(ColorBox);
