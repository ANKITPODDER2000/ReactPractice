import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import CreatePaletteNameForm from "./CreatePaletteNameForm";

let drawerWidth = 350;

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
  }),
}));

export default class PaletteNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "",
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
  handleSubmit(palettename) {
    this.props.createNewPalette(palettename);
  }
  render() {
    const { open, handleDrawerOpen } = { ...this.props };
    return (
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Create Your Palette
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#8b1995de",
                margin: "0 10px",
              }}
              onClick={() => this.props.history.goBack()}
            >
              Go Back
            </Button>
            <Button
              disabled={this.props.nColor !== 20}
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                margin: "0 10px",
                opacity: this.props.nColor === 20 ? "1" : "0.5",
              }}
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
