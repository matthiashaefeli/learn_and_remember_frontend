import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
          mutation {
            addUser(input: { params: { name: "${name}", email: "${email}", password: "${password}" }}) {
              authenticate {
                token
              }
              user {
                name
                email
              }
            }
          }
        `
      }
    }).then((result) => {
      this.setState({ name: '', email: '', password: '' })
      const { token } = result.data.data.addUser.authenticate
      const { name, email } = result.data.data.addUser.user
      localStorage.setItem('token', token)
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    })
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
              value={this.state.name}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              data-testid='email-input'
              name='email'
              type="email"
              onChange={this.handleInput.bind(this)}
              value={this.state.email}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              data-testid='password-input'
              name='password'
              type="password"
              onChange={this.handleInput.bind(this)}
              value={this.state.password}
            />
          </label>
          <div>
            <button
              type="submit"
              onClick={this.handleSubmit.bind(this)}
            >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
