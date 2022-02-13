import React, { Component } from 'react';
import AuthService from '../../services/auth_service';

class SkillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      language: '',
      status: '',
      userId: ''
    }
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { title, language, status, userId } = this.state
    // const { create_or_update } = this.props
    // if(create_or_update === 'create') {

    // } else if(create_or_update === 'update') {

    // }
    this.setState({title: '', language: '', status: '', userId: ''})
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <p>Title</p>
            <input
              data-testid='title-input'
              name='title'
              type="text"
              onChange={this.handleInput.bind(this)}
              value={this.state.title}
            />
          </label>
          <label>
            <p>Language</p>
            <input
              data-testid='language-input'
              name='language'
              type="text"
              onChange={this.handleInput.bind(this)}
              value={this.state.language}
            />
          </label>
          <label>
            <p>Status</p>
            <input
              data-testid='status-input'
              name='status'
              type="text"
              onChange={this.handleInput.bind(this)}
              value={this.state.status}
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

export default SkillForm;