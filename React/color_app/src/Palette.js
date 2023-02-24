import React, { Component } from "react";
import ColorBox from "./ColorBox";
import ConfirmBox from "./ConfirmBox";
import NavBar from "./NavBar";

import Footer from "./Footer";
import withStyles from "react-jss";

const styles = {
  paletteContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  colorBoxContainer: {
    position: "relative",
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background: "red",
  },
};

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
    const { classes } = { ...this.props };
    return (
      <div className={classes.paletteContainer}>
        <NavBar
          colorDensity={this.state.colorDensity}
          handleSliderValue={this.handleSliderValue}
          colorformat={this.state.colorformat}
          handleColorformat={this.handleColorformat}
        />
        <div className={classes.colorBoxContainer}>
          {this.props.colorShade[this.state.colorDensity].map((color) => (
            <ColorBox
              name={color.name}
              color={color[this.state.colorformat]}
              paletteName={this.props.paletteName}
            />
          ))}
        </div>
        <ConfirmBox open={this.state.open} handleClose={this.handleClose} />
        <Footer paletteName={this.props.paletteName + " " + this.props.emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
