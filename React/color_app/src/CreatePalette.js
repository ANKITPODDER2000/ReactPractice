import React, { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import chroma from "chroma-js";
import ntc from "./ntc";
import PaletteNavBar from "./PaletteNavBar";
import CreatePaletteColorBox from "./CreatePaletteColorBox";
import CreatePaletteSideBar from "./CreatePaletteSideBar";

class CreatePalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      color: "#f0f521",
      name: "",
      palette: [
        { color: "#f0f521", name: "Yellow" },
        { color: "#6b34ca", name: "Blue" },
      ],
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandomColor = this.handleRandomColor.bind(this);
  }
  handleSubmit() {
    this.setState(
      (st) => ({
        palette: [...st.palette, { color: st.color, name: st.name }],
      }),
      () => {
        this.setState({ name: "", color: "#f00" });
      }
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleDrawerOpen() {
    this.setState({ open: true });
  }
  handleRandomColor() {
    let color = undefined;
    let specific_name = undefined;
    while (true) {
      color = chroma(chroma.random()).hex();
      console.log(color);
      let found = false;
      specific_name = ntc.name(color)[1];
      for (let i = 0; i < this.state.palette.length; i++) {
        let c = this.state.palette[i];
        if (c.color === color) {
          found = true;
          break;
        }
        if (c.name === specific_name) {
          found = true;
          break;
        }
      }
      if (!found) break;
    }
    this.setState((st) => ({
      palette: [...st.palette, { color: color, name: specific_name }],
    }));
  }
  handleDrawerClose() {
    this.setState({ open: false });
  }
  handleColorChange(color) {
    let result = ntc.name(color.hex);
    let specific_name = result[1];
    this.setState({
      color: color.hex,
      name: specific_name,
    });
  }

  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <PaletteNavBar
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <CreatePaletteSideBar
          handleDrawerClose={this.handleDrawerClose}
          palette={this.state.palette}
          handleRandomColor={this.handleRandomColor}
          handleColorChange={this.handleColorChange}
          handleChange={this.handleChange}
          color={this.state.color}
          open={this.state.open}
          name={this.state.name}
          handleSubmit={this.handleSubmit}
        />
        <CreatePaletteColorBox
          open={this.state.open}
          palette={this.state.palette}
        />
      </Box>
    );
  }
}

export default CreatePalette;
