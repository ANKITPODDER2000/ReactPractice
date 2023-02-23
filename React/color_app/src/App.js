import React, { Component } from "react";
import Palette from "./Palette";
import SeedColors from "./SeedColors";
import getUpdatedPalette from "./GetUpdatedPalette";

import "./css/App.css";
import { Route, Switch } from "react-router-dom";
import AllPalette from "./AllPalette";
import ColorShades from "./ColorShades";

const getAllShadesofColor = (palette, color) => {
  let allShades = [];
  palette = getUpdatedPalette(palette[0]);
  for (let shades = 100; shades <= 1000; shades += 100) {
    let allcolors = palette.colorShade[shades];
    allShades.push(
      allcolors.filter(
        (colorShade) => colorShade.name.split(" ")[0] === color
      )[0]
    );
  }

  return {
    allShades: allShades,
    emoji: palette.emoji,
    paletteName: palette.paletteName,
  };
};

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
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <AllPalette
                colors={SeedColors.map((color) => color.paletteName)}
              />
            )}
          />
          <Route
            exact
            path="/palette/:palette_name"
            component={(props) => (
              <Palette
                {...getUpdatedPalette(
                  SeedColors.filter(
                    (palette) =>
                      palette.paletteName === props.match.params.palette_name
                  )[0]
                )}
                colorDensity={this.state.colorDensity}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/palette/:palette_name/:color_name"
            component={(props) => (
              <ColorShades
                {...getAllShadesofColor(
                  SeedColors.filter(
                    (palette) =>
                      palette.paletteName === props.match.params.palette_name
                  ),
                  props.match.params.color_name
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
