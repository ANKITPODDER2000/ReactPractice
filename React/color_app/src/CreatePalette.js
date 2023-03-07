import React, { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import chroma from "chroma-js";
import ntc from "./ntc";
import PaletteNavBar from "./PaletteNavBar";
import CreatePaletteColorBox from "./CreatePaletteColorBox";
import CreatePaletteSideBar from "./CreatePaletteSideBar";
import { ValidatorForm } from "react-material-ui-form-validator";

class CreatePalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      color: "#f0f521",
      name: "",
      colors: [
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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClearPalette = this.handleClearPalette.bind(this);
    this.createNewPalette = this.createNewPalette.bind(this);
  }
  handleClearPalette() {
    this.setState({ palette: [] });
  }
  handleRemove(color) {
    this.setState((st) => ({
      colors: st.colors.filter((palette) => palette.color !== color),
    }));
  }
  handleSubmit() {
    this.setState(
      (st) => ({
        colors: [...st.colors, { color: st.color, name: st.name }],
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
      let found = false;
      specific_name = ntc.name(color)[1];
      for (let i = 0; i < this.state.colors.length; i++) {
        let c = this.state.colors[i];
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
      colors: [...st.colors, { color: color, name: specific_name }],
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

  createNewPalette(paletteName, emoji) {
    let newPalette = {
      colors: this.state.colors,
      paletteName: paletteName,
      emoji: emoji,
      id: paletteName.toLowerCase().replaceAll(" ", "-"),
    };
    this.props.handleCreatePalette(newPalette);
    this.props.history.push("/");
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isSameName", (value) => {
      for (let i = 0; i < this.state.colors.length; i++) {
        if (
          this.state.colors[i].name.toLocaleLowerCase() ===
          value.toLocaleLowerCase()
        )
          return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule("isSamePaletteName", (value) => {
      for (let i = 0; i < this.props.paletteNames.length; i++) {
        if (
          this.props.paletteNames[i].toLocaleLowerCase() ===
          value.toLocaleLowerCase()
        )
          return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule("isSameColor", (value) => {
      for (let i = 0; i < this.state.colors.length; i++) {
        if (this.state.colors[i].color === this.state.color) return false;
      }
      return true;
    });
  }

  render() {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <PaletteNavBar
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen}
          history={this.props.history}
          nColor={this.state.colors.length}
          createNewPalette={this.createNewPalette}
        />
        <CreatePaletteSideBar
          handleDrawerClose={this.handleDrawerClose}
          palette={this.state.colors}
          handleRandomColor={this.handleRandomColor}
          handleColorChange={this.handleColorChange}
          handleChange={this.handleChange}
          color={this.state.color}
          open={this.state.open}
          name={this.state.name}
          handleSubmit={this.handleSubmit}
          handleClearPalette={this.handleClearPalette}
        />
        <CreatePaletteColorBox
          open={this.state.open}
          palette={this.state.colors}
          handleRemove={this.handleRemove}
        />
      </Box>
    );
  }
}

export default CreatePalette;
