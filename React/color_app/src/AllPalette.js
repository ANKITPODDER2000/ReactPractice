import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllPalette extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.colors.map((palettename) => (
            <li>
              <Link to={`/palette/${palettename}`}>{palettename}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default AllPalette;
