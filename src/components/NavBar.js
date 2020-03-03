import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/users">
          <h3>Users</h3>
        </Link>
      </div>
    );
  }
}

export default NavBar;
