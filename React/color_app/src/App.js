import React, { Component } from "react";
import Palette from "./Palette";
import SeedColors from "./SeedColors";
import getUpdatedPalette from "./GetUpdatedPalette";

import "./css/App.css";

class App extends Component {
  render() {
    let updatedColor = getUpdatedPalette(SeedColors[4]);
    return (
      <div className="app-container">
        <Palette {...SeedColors[4]} />
      </div>
    );
  }
}

export default App;
