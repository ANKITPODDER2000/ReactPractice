import React, { Component } from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";
import PaletteBox from "./PaletteBox";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    flexWrap: "wrap",
    background: "#262683",
  },
  nav: {
    position: "relative",
    width: "50%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 0 15px",
    "& p": {
      fontSize: "18px",
      color: "#fff",
      fontWeight: "bold",
    },
    "& a": {
      textDecoration: "none",
      fontSize: "14px",
      color: "#fff",
      padding: "8px 25px",
      backgroundColor: "#fff1",
      borderRadius: "5px",
      transition: "0.5s",
      "&:hover ": {
        backgroundColor: "#fff3",
      },
    },
  },
  innerdiv: {
    position: "relative",
    height: "auto",
    width: "50%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <nav className={classes.nav}>
          <p>React Color</p>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.innerdiv}>
          {this.props.colors.map((palettename) => (
            <PaletteBox {...palettename} history={this.props.history} />
          ))}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
