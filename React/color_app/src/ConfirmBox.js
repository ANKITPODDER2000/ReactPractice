import React, { Component } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default class ConfirmBox extends Component {
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          autoHideDuration={2000}
          onClose={this.props.handleClose}
          message="Format changed !!!"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.props.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    );
  }
}
