import React, { Component } from 'react';
import SkillForm from '../Forms/SkillForm';

class AddSkill extends Component {
  render() {
    return (
      <div className='add-skill-container'>
        <SkillForm create_or_update='create' />
      </div>
    );
  }
}

export default AddSkill;