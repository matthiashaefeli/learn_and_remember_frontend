import React, { Component } from 'react';
import Userform from '../Forms/Userform';

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Userform auth='register' />
      </div>
    );
  }
}

export default Signup;
