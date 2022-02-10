import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../../services/auth_service';

class Navbar extends Component {

  state = {
    currentUser: undefined,
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser()
    if(user) {
      this.setState({ currentUser: user })
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({ currentUser: undefined })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
      <h1>Learn And Remember</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        {currentUser && (
          <>
            <Link to="/" onClick={this.logOut}>Logout</Link> |{" "}
            <Link to="/">Home</Link>
          </>
        )}
        {!currentUser && (
          <>
            <Link to="/signin">Sign IN</Link> |{" "}
            <Link to="/signup">Sign UP</Link>
          </>
        )}

      </nav>
    </div>
    );
  }
}

export default Navbar;