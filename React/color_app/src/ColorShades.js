import React, { Component } from "react";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import withStyles from "react-jss";

const styles = {
  mainContainer: {
    overflow: "hidden",
  },
  root: {
    position: "relative",
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

class ColorShades extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <NavBar isPalettePage={false} />
        <div className={classes.root}>
          {this.props.allShades.map((color) => (
            <ColorBox name={color.name} color={color.hex} isPalette={false} />
          ))}
        </div>
        <Footer paletteName={this.props.paletteName + " " + this.props.emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(ColorShades);
