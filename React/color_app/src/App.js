import React, { Component } from "react";
import Palette from "./Palette";
import SeedColors from "./SeedColors";
import getUpdatedPalette from "./GetUpdatedPalette";

import { Route, Switch } from "react-router-dom";
import AllPalette from "./AllPalette";
import ColorShades from "./ColorShades";
import getAllShadesofColor from "./getAllShadesofColor";
import withStyles from "react-jss";

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
    };
    this.handleSliderValue = this.handleSliderValue.bind(this);
  }
  handleSliderValue(val) {
    this.setState({
      colorDensity: val,
    });
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
              <AllPalette colors={SeedColors} {...params} />
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

export default withStyles(styles)(App);
