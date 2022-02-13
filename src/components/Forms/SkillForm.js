import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class SkillForm extends Component {
  constructor(props) {
    super(props);

    this.statusOptions = [
      { value: '0', label: 'draft'},
      { value: '1', label: 'unpublished'},
      { value: '2', label: 'published'}
    ];

    this.languageOptions = [
      { value: '0', label: 'ruby' }
    ]

    this.state = {
      title: '',
      language: '',
      status: '0',
      userId: ''
    }
  }

  onStatusSelect = (e) => {
    this.setState({
      status: e.value
    })
  }

  onLanguageSelect = (e) => {
    this.setState({
      language: e.value
    })
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger;
    // const { title, language, status, userId } = this.state
    // const { create_or_update } = this.props
    // if(create_or_update === 'create') {

    // } else if(create_or_update === 'update') {

    // }
    this.setState({title: '', language: '', status: 0, userId: ''})
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
              type='text'
              onChange={this.handleInput.bind(this)}
              value={this.state.title}
            />
          </label>
          <label>
            <p>Status</p>
            <Dropdown
              options={this.statusOptions}
              onChange={this.onStatusSelect}
              value={this.state.status}
            />
          </label>
          <label>
            <p>language</p>
            <Dropdown
              id='language'
              options={this.languageOptions}
              onChange={this.onLanguageSelect}
              value={this.state.language}
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