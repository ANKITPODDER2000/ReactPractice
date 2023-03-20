import React, { Component } from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";
import PaletteBox from "./PaletteBox";
import img from "./images/background.svg";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    flexWrap: "wrap",
    background: `url(${img})`,
    paddingBottom: "60px",
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
    "@media (max-width: 1270px)": {
      width: "70%",
    },
    "@media (max-width: 1000px)": {
      width: "90%",
    },
    "@media (max-width: 700px)": {
      width: "90%",
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
    "@media (max-width: 1270px)": {
      width: "70%",
    },
    "@media (max-width: 1000px)": {
      width: "90%",
    },
    "@media (max-width: 700px)": {
      justifyContent: "space-between",
    },
    "@media (max-width: 460px)": {
      justifyContent: "center",
    },
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
