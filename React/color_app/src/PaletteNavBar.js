import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import CreatePaletteNameForm from "./CreatePaletteNameForm";
import drawerWidth from "./config";
import withStyles from "react-jss";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "@media (max-width : 750px)": {
      width: "0",
      marginLeft: "100%",
    },
  }),
}));

const styles = {
  center: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  createPalette: {
    backgroundColor: "#000",
    color: "#fff",
    margin: "0 10px",
    backgroundColor: (props) => (props.nColor === 20 ? "#0007" : "#0003"),
    color: (props) => (props.nColor === 20 ? "#fff8" : "#fff6"),
    cursor: (props) => (props.nColor === 20 ? "pointer" : "not-allowed"),
    transition: "0.5s",
    "&:hover": {
      background: (props) => props.nColor === 20 && "#000",
      color: (props) => props.nColor === 20 && "#fff",
    },
    "@media (max-width : 950px)": {
      fontSize: "10px",
    },
  },
  goBack: {
    backgroundColor: "#8b1995de",
    margin: "0 10px",
    "@media (max-width : 950px)": {
      fontSize: "10px",
    },
  },
  title: {
    "@media (max-width : 950px)": {
      fontSize: "16px",
    },
  },
};

class PaletteNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "emoji",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreatePalette = this.handleCreatePalette.bind(this);
  }
  handleClose() {
    this.setState({ stage: "" });
  }
  handleCreatePalette() {
    this.setState({ stage: "form" });
  }
  handleSubmit(palettename, emoji) {
    this.props.createNewPalette(palettename, emoji);
  }
  render() {
    const { open, handleDrawerOpen, classes } = { ...this.props };
    return (
      <AppBar position="fixed" open={open} style={{ height: "64px" }}>
        <Toolbar className={classes.center}>
          <div className={classes.center}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className={classes.title}
            >
              Create Your Palette
            </Typography>
          </div>
          <div className={classes.btnContainer}>
            <Button
              variant="contained"
              type="submit"
              className={classes.goBack}
              onClick={() => this.props.history.goBack()}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              type="submit"
              className={classes.createPalette}
              onClick={this.handleCreatePalette}
            >
              Create Palette
            </Button>
          </div>
        </Toolbar>
        <CreatePaletteNameForm
          handleClose={this.handleClose}
          stage={this.state.stage}
          handleSubmit={this.handleSubmit}
        />
      </AppBar>
    );
  }
}

export default withStyles(styles)(PaletteNavBar);
