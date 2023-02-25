import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import withStyles from "react-jss";

const styles = {
  root: {
    position: "relative",
    display: "block",
    height: "80%",
    "& div": {
      position: "relative",
      height: "100%",
      width: "160px",
    },
  },
};

class ColorFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorformat: this.props.colorformat,
    };
    this.handleColorformat = this.handleColorformat.bind(this);
  }
  handleColorformat(e) {
    this.setState({
      colorformat: e.target.value,
    });
    this.props.handleColorformat(e.target.value);
  }
  render() {
    const { classes } = { ...this.props };
    return (
      <div className={classes.root}>
        <Select
          value={this.state.colorformat}
          onChange={this.handleColorformat}
        >
          <MenuItem value="hex">HEX #000000</MenuItem>
          <MenuItem value="rgb">RGB rgb(0,0,0)</MenuItem>
          <MenuItem value="rgba">RGBA rgba(0,0,0)</MenuItem>
        </Select>
      </div>
    );
  }
}

export default withStyles(styles)(ColorFormat);
