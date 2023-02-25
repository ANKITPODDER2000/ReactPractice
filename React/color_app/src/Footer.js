import React, { Component } from "react";
import withStyles from "react-jss";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: "4vh",
    background: "#0002",
    textAlign: "right",
    paddingRight: "20px",
    "& p": {
      fontSize: "15px",
      lineHeight: "4vh",
    },
  },
};

class Footer extends Component {
  render() {
    const { classes } = { ...this.props };
    return (
      <div className={classes.root}>
        <p>{this.props.paletteName}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
