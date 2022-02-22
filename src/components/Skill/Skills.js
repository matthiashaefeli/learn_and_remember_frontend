import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Skill extends Component {
  render() {
    const { title, language, user, id } = this.props.skill;
    return (
      <div className='skill-list-item'>
        <Link to={'/skills/' + id}>
          title: {title}
          language: {language.label}
          user: {user.name}
        </Link>
      </div>
    );
  }
}

export default Skill;
