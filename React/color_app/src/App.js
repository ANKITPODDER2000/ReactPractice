import React, { Component } from "react";
import Palette from "./Palette";
import SeedColors from "./SeedColors";
import getUpdatedPalette from "./GetUpdatedPalette";

import "./css/App.css";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorDensity: 500,
    };
    this.handleSliderValue = this.handleSliderValue.bind(this);
  }
  handleSliderValue(val) {
    this.setState({
      colorDensity: val,
    });
  }

  render() {
    return (
      <div className="app-container">
        <Palette
          {...getUpdatedPalette(SeedColors[0])}
          colorDensity={this.state.colorDensity}
        />
      </div>
    );
  }
}

export default App;
