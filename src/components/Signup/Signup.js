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
            <p>name</p>
            <input
              name='name'
              type="text"
              onChange={this.handleInput.bind(this)}
            />
          </label>
          <label>
            <p>email</p>
            <input
              name='email'
              type="text"
              onChange={this.handleInput.bind(this)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
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