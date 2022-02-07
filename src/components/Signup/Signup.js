import React, { Component } from 'react';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    // here we create user with axios
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <p>Name</p>
            <input
              data-testid='name-input'
              name='name'
              type="text"
              onChange={this.handleInput.bind(this)}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              data-testid='email-input'
              name='email'
              type="email"
              onChange={this.handleInput.bind(this)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              data-testid='password-input'
              name='password'
              type="password"
              onChange={this.handleInput.bind(this)}
            />
          </label>
          <div>
            <button
              type="submit"
              onClick={this.handleSubmit()}
            >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
