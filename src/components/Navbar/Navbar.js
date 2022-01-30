import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
      <h1>Learn And Remember</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/signin">Sign IN</Link> |{" "}
        <Link to="/signup">Sign UP</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>
    </div>
    );
  }
}

export default Navbar;