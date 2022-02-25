import React, { Component } from 'react';
import Select from 'react-select';
import LanguageService from '../../services/language_service';
import AuthService from '../../services/auth_service';
import SkillService from '../../services/skill_service';
import TextEditor from '../../components/TextEditor/TextEditor';
import './styles.scss';

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
      languageOptions: [],
      user: {},
      text: ''
    }
  }

  componentDidMount() {
    LanguageService.fetchLanguages();
    this.setState({
      languageOptions: LanguageService.getLanguages(),
      user: AuthService.getCurrentUser()
    });
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

  handleTextInput(e) {
    this.setState({
      text: e
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, language, status, user } = this.state
    const { authenticate } = user
    const { create_or_update } = this.props
    const body = escape(document.getElementsByClassName('ProseMirror')[0].innerHTML)

    if(!title || !language || !status || body === '<p><br class="ProseMirror-trailingBreak"></p>') {
      return
    }
    if(create_or_update === 'create') {
      SkillService.addSkill(authenticate.token, title, language, status, body)
    } else if(create_or_update === 'update') {

    }
  }

  render() {
    return (
      <div className='skill-form-container'>
        <form>
          <label>
            <p>Title</p>
            <input
              data-testid='title-input'
              name='title'
              type='text'
              onChange={this.handleInput.bind(this)}
              value={this.state.title}
              autoFocus='True'
              className='title-input'
            />
          </label>
          <label>
            <p>Text</p>
            <TextEditor />
          </label>
          <label>
            <p>Language</p>
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