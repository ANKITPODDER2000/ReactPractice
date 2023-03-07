import React, { Component } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

class CreatePaletteNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmit: false,
      paletteName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleFormSubmit() {
    this.setState({ isFormSubmit: true });
  }
  handleSubmit(emoji) {
    this.props.handleSubmit(this.state.paletteName, emoji);
  }
  render() {
    return (
      <Dialog open={this.props.stage === "form"} onClose={this.handleClose}>
        {this.state.isFormSubmit ? (
          <Picker
            data={data}
            onEmojiSelect={(e) => this.handleSubmit(e.native)}
          />
        ) : (
          <>
            <DialogTitle>Subscribe</DialogTitle>
            <ValidatorForm onSubmit={this.handleFormSubmit}>
              <DialogContent>
                <DialogContentText>
                  Hey Give a unique Palette name... Remember we will double
                  check the palette name, if any palette exists with your given
                  name we'll not allow you to create a Palette.....
                </DialogContentText>

                <TextValidator
                  label="Palette Name"
                  onChange={this.handleChange}
                  name="paletteName"
                  value={this.state.paletteName}
                  validators={["required", "isSamePaletteName"]}
                  errorMessages={[
                    "this field is required",
                    "Palette with same name already exists",
                  ]}
                  fullWidth
                  variant="standard"
                  autoFocus
                  margin="dense"
                />
              </DialogContent>
              {/* <Picker data={data} onEmojiSelect={console.log} /> */}
              <DialogActions>
                <Button onClick={this.props.handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
              </DialogActions>
            </ValidatorForm>
          </>
        )}
      </Dialog>
    );
  }
}

export default CreatePaletteNameForm;
