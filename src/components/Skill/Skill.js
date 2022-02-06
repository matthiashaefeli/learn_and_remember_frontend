import React, { Component } from 'react';

class Skill extends Component {
  render() {
    const { title, language, user, id } = this.props.skill;
    return (
      <div>
        title: {title}
        language: {language.name}
        user: {user.name}
      </div>
    );
  }
}

export default Skill;