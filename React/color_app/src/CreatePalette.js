import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import withStyles from "react-jss";
import chroma from "chroma-js";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CreateColorBox from "./CreateColorBox";
import ntc from "./ntc";
import PaletteNavBar from "./PaletteNavBar";

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

const styles = {
  btnContainer: {
    position: "relative",
    width: "85%",
    margin: "60px auto 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    position: "relative",
    width: "85%",
    margin: "0 auto",
    "& div": {
      position: "relative",
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      "& input": {
        boxSizing: "border-box",
        height: "50px",
        marginBottom: "15px",
      },
    },
  },
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

class CreatePalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      color: "#f0f521",
      name: "",
      palette: [
        { color: "#f0f521", name: "Yellow" },
        { color: "#6b34ca", name: "Blue" },
      ],
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandomColor = this.handleRandomColor.bind(this);
  }
  handleSubmit() {
    this.setState(
      (st) => ({
        palette: [...st.palette, { color: st.color, name: st.name }],
      }),
      () => {
        this.setState({ name: "", color: "#f00" });
      }
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleDrawerOpen() {
    this.setState({ open: true });
  }
  handleRandomColor() {
    let color = undefined;
    let specific_name = undefined;
    while (true) {
      color = chroma(chroma.random()).hex();
      console.log(color);
      let found = false;
      specific_name = ntc.name(color)[1];
      for (let i = 0; i < this.state.palette.length; i++) {
        let c = this.state.palette[i];
        if (c.color === color) {
          found = true;
          break;
        }
        if (c.name === specific_name) {
          found = true;
          break;
        }
      }
      if (!found) break;
    }
    this.setState((st) => ({
      palette: [...st.palette, { color: color, name: specific_name }],
    }));
  }
  handleDrawerClose() {
    this.setState({ open: false });
  }
  handleColorChange(color) {
    let result = ntc.name(color.hex);
    let specific_name = result[1];
    this.setState({
      color: color.hex,
      name: specific_name,
    });
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isSameName", (value) => {
      for (let i = 0; i < this.state.palette.length; i++) {
        if (
          this.state.palette[i].name.toLocaleLowerCase() ===
          value.toLocaleLowerCase()
        )
          return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule("isSameColor", (value) => {
      for (let i = 0; i < this.state.palette.length; i++) {
        if (this.state.palette[i].color === this.state.color) return false;
      }
      return true;
    });
  }
  render() {
    const { open, name } = { ...this.state };
    const { classes } = { ...this.props };
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <PaletteNavBar open={open} handleDrawerOpen={this.handleDrawerOpen} />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div className={this.props.classes.btnContainer}>
            <Button variant="contained" color="error">
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleRandomColor}
              disabled={this.state.palette.length === 20}
            >
              Pick Random
            </Button>
          </div>
          <ChromePicker
            color={this.state.color}
            onChangeComplete={(color) => this.handleColorChange(color)}
          />
          <ValidatorForm
            onSubmit={this.handleSubmit}
            onError={(errors) => console.log(errors)}
            className={classes.form}
          >
            <TextValidator
              label="name"
              onChange={this.handleChange}
              name="name"
              value={name}
              validators={["required", "isSameName", "isSameColor"]}
              errorMessages={[
                "this field is required",
                "Same name already exist",
                "Same color already exist",
              ]}
            />
            <Button
              disabled={this.state.palette.length === 20}
              variant="contained"
              type="submit"
              style={{
                backgroundColor: this.state.color,
                width: "100%",
                margin: "0 auto",
                color:
                  chroma(this.state.color).luminance() < 0.2 ? "#fff" : "#000",
              }}
            >
              {this.state.palette.length === 20 ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
        </Drawer>
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
            {this.state.palette.map((color) => (
              <CreateColorBox {...color} />
            ))}
          </div>
        </Main>
      </Box>
    );
  }
}

export default withStyles(styles)(CreatePalette);
