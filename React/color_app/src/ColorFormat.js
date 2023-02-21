import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./css/ColorFormat.css";

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
    return (
      <div className="format-selecter">
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

export default ColorFormat;
