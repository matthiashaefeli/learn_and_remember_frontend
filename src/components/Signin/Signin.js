import React, { Component } from 'react';
import Userform from '../Forms/Userform';

class Signin extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Userform auth='login' />
      </div>
    );
  }
}

export default Signin;