import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Skill extends Component {
  render() {
    const { title, language, id } = this.props.skill;
    return (
      <div className='skill-container'>
        <Link to={'/skills/' + id} className='skill-link'>
          <div className='skill-list-item'>
            <div>{language.label}</div>
            <div>{title}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Skill;
