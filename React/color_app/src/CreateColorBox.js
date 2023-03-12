import React, { Component } from "react";
import withStyles from "react-jss";
import chroma from "chroma-js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const style = {
  root: {
    position: "relative",
    width: "20%",
    height: "25%",
    "@media (max-width : 550px)": {
      width: "50%",
      height: "10%",
    },
  },
  innerDiv: {
    position: "absolute",
    width: "100%",
    padding: "5px 10px",
    bottom: "0",
    fontSize: "13px",
    color: (props) => (chroma(props.color).luminance() < 0.2 ? "#fff" : "#000"),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& svg": {
      transform: "scale(0.8)",
      cursor: "pointer",
      transition: "0.5s",
      opacity: "0.6",
    },
    "& svg:hover": {
      transform: "scale(1)",
      opacity: "1",
    },
  },
};

class CreateColorBox extends Component {
  render() {
    const { name, color, classes } = { ...this.props };
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.innerDiv}>
          <p>{name}</p>
          <DeleteForeverIcon onClick={() => this.props.handleRemove(color)} />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(CreateColorBox);
