import React, { Component } from 'react';
import Skill from '../Skill/Index';

class Home extends Component {
  render() {
    return (
      <div>
        <Skill skill_status={2} />
      </div>
    );
  }
}

export default Home;