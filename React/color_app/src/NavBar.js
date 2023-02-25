import React, { Component } from "react";
import Slider from "rc-slider";
import styles from "./css/NavBar";

import "rc-slider/assets/index.css";
import ColorFormat from "./ColorFormat";
import { Link } from "react-router-dom";
import withStyles from "react-jss";

class NavBar extends Component {
  static defaultProps = {
    isPalettePage: true,
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(val) {
    this.props.handleSliderValue(val);
  }
  render() {
    const { classes } = { ...this.props };
    return (
      <div className={classes.root}>
        <div className={classes.leftDiv}>
          <Link to="/" className={classes.title}>
            Color Picker
          </Link>
          {this.props.isPalettePage && (
            <>
              <p className={classes.level}>Level : {this.props.colorDensity}</p>
              <div className={classes.sliderContainer}>
                <Slider
                  value={this.props.colorDensity}
                  min={100}
                  max={1000}
                  step={100}
                  onChange={this.handleChange}
                />
              </div>
            </>
          )}
        </div>
        <div className={classes.leftDiv}>
          {this.props.isPalettePage && (
            <ColorFormat
              colorformat={this.props.colorformat}
              handleColorformat={this.props.handleColorformat}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
