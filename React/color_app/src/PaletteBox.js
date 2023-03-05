import React, { Component } from "react";
import withStyles from "react-jss";

const styles = {
  root: {
    position: "relative",
    width: "200px",
    height: "150px",
    margin: "15px 0",
    marginLeft: "calc(calc(100% - 600px) / 6)",
    marginRight: "calc(calc(100% - 600px) / 6)",
    borderRadius: "4px",
    boxShadow: "10px 10px 10px #0001",
    background: "#fff",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "10px 10px 10px #0006",
    },
  },
  innerdiv1: {
    position: "relative",
    width: "90%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    margin: "10px auto 10px",
    borderRadius: "4px",
    overflow: "hidden",
    "& span": {
      display: "block",
      width: "20%",
      height: "25%",
    },
  },
  title: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 15px",
    "& p": {
      fontSize: "13px",
    },
  },
};

class PaletteBox extends Component {
  render() {
    let { colors, emoji, paletteName, classes } = { ...this.props };
    return (
      <div
        className={classes.root}
        onClick={() => this.props.history.push(`/palette/${paletteName}`)}
      >
        <div className={classes.innerdiv1}>
          {colors.map((color) => (
            <span style={{ backgroundColor: color.color }}></span>
          ))}
        </div>
        <div className={classes.title}>
          <p>{paletteName}</p>
          <p>{emoji}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteBox);
