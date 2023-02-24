import React, { Component } from "react";
import withStyles from "react-jss";
import PaletteBox from "./PaletteBox";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    flexWrap: "wrap",
    background: "#262683",
  },
  innerdiv: {
    position: "relative",
    height: "auto",
    width: "50%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: "60px",
  },
};

class AllPalette extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.innerdiv}>
          {this.props.colors.map((palettename) => (
            <PaletteBox {...palettename} history={this.props.history} />
          ))}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(AllPalette);
