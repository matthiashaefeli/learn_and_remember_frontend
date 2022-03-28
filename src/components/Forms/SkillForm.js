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

    this.state = {
      title: '',
      language: '',
      status: '0',
      languageOptions: [],
      user: {},
      text: '',
      id: 0,
    }
  }

  componentDidMount() {
    const { skill } = this.props
    LanguageService.fetchLanguages();
    this.setState({
      languageOptions: LanguageService.getLanguages(),
      user: AuthService.getCurrentUser(),
      text: ' '
    })
    if (skill) {
      this.setState({
        title: skill.title,
        language: skill.language,
        status: this.statusOptions[0],
        text: unescape(skill.body),
        id: skill.id,
      })
    }
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
    const { title, language, status, user, id } = this.state
    const { authenticate } = user
    const { create_or_update } = this.props
    const body = document.getElementsByClassName('ProseMirror')[0].innerHTML
    if(!title || !language || !status || body === '<p><br class="ProseMirror-trailingBreak"></p>' || body === '') {
      return
    }
    if(create_or_update === 'create') {
      SkillService.addSkill(authenticate.token, title, language, status, escape(body))
    } else if(create_or_update === 'update') {
      SkillService.updateSkill(authenticate.token, title, language, status, escape(body), id)
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
            {this.state.text && (
              <TextEditor text={this.state.text} />
            )}
          </label>
          <label>
            <p>Language/Topic</p>
            <Select
              value={this.state.language}
              onChange={this.onLanguageSelect}
              options={this.state.languageOptions}
            />
          </label>
          <label>
            <p>Status</p>
            <Select
              value={this.state.status}
              onChange={this.onStatusSelect}
              options={this.statusOptions}
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