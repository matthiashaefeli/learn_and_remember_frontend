import React, { Component } from 'react';
import SkillForm from '../Forms/SkillForm';

class CreateSkill extends Component {
  render() {
    return (
      <div>
        <SkillForm create_or_update='create' />
      </div>
    );
  }
}

export default CreateSkill;