import React, { Component } from 'react';
import Userform from '../Forms/Userform';

class Signup extends Component {
  render() {
    return (
      <Userform auth='register' />
    );
  }
}

export default Signup;
