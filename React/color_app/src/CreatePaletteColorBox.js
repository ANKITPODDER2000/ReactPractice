import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import CreateColorBox from "./CreateColorBox";

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

class CreatePaletteColorBox extends Component {
  render() {
    const { open, palette } = { ...this.props };
    return (
      <Main
        open={open}
        style={{
          position: "relative",
          height: "calc(100vh)",
          padding: "0",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "calc(100% - 64px)",
            marginTop: "64px",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {palette.map((color) => (
            <CreateColorBox {...color} />
          ))}
        </div>
      </Main>
    );
  }
}

export default CreatePaletteColorBox;
