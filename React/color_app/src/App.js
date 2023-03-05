import React, { Component } from "react";
import SeedColors from "./SeedColors";
import getUpdatedPalette from "./GetUpdatedPalette";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ColorShades from "./ColorShades";
import getAllShadesofColor from "./getAllShadesofColor";
import withStyles from "react-jss";
import CreatePalette from "./CreatePalette";
import Palette from "./Palette";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorDensity: 500,
      SeedColors: SeedColors,
    };
    this.handleSliderValue = this.handleSliderValue.bind(this);
    this.handleCreatePalette = this.handleCreatePalette.bind(this);
  }
  handleSliderValue(val) {
    this.setState({
      colorDensity: val,
    });
  }
  handleCreatePalette(palette) {
    this.setState((st) => ({
      SeedColors: [...st.SeedColors, palette],
    }));
  }

  render() {
    const { classes } = { ...this.props };
    return (
      <div className={classes.root}>
        <Switch>
          <Route
            exact
            path="/"
            component={(params) => (
              <Home colors={this.state.SeedColors} {...params} />
            )}
          />
          <Route
            exact
            path="/palette/new"
            component={(params) => (
              <CreatePalette
                {...params}
                paletteNames={this.state.SeedColors.map(
                  (palette) => palette.paletteName
                )}
                handleCreatePalette={this.handleCreatePalette}
              />
            )}
          />
          <Route
            exact
            path="/palette/:palette_name"
            component={(props) => (
              <Palette
                {...getUpdatedPalette(
                  this.state.SeedColors.filter(
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
                  this.state.SeedColors.filter(
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

export default withStyles(styles)(App);
