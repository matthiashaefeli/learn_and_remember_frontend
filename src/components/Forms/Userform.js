import React, { Component } from 'react';
import AuthService from '../../services/auth_service';

class Userform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state
    const { auth } = this.props
    if(auth === 'register') {
      AuthService.register(name, email, password)
    } else if(auth === 'login') {
      AuthService.login(name, email, password)
    }
    this.setState({name: '', email: '', password: ''})
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

export default Userform;