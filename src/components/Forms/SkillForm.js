import React, { Component } from 'react';
import Select from 'react-select';
import LanguageService from '../../services/language_service';

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
      userId: '',
      languageOptions: []
    }
  }

  componentDidMount() {
    LanguageService.fetchLanguages()
    this.setState({ languageOptions: LanguageService.getLanguages() })
  }

  onStatusSelect = (e) => {
    this.setState({
      status: e
    })
  }

  onLanguageSelect = (e) => {
    this.setState({
      language: e
    })
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    // debugger;
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
            <p>language</p>
            <Select
              value={this.state.language}
              onChange={this.onLanguageSelect}
              options={this.state.languageOptions}
            />
          </label>
          <label>
            <p>Status</p>
            <Select
              options={this.statusOptions}
              onChange={this.onStatusSelect}
              value={this.state.status}
            />
          </label>
          <label>
            <p>
              <button
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              >
                Submit
              </button>
            </p>
          </label>
        </form>
      </div>
    );
  }
}

export default SkillForm;