import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../../services/auth_service';
import './styles.scss';

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
      <div className='nav-container'>
        <div className='nav-title'>
          <h1>Learn And Remember</h1>
        </div>
        <div className='nav-bar'>
          {!currentUser && (
            <>
              <Link to="/signin"> Sign IN |</Link>
              <Link to="/signup"> Sign UP |</Link>
            </>
          )}
          <Link to="/"> Home |</Link>
          <Link to="/skills"> Skills |</Link>
          {currentUser && (
            <>
              <Link to="/addSkill"> New Skill |</Link>
              <Link to="/" onClick={this.logOut}> Logout</Link>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;