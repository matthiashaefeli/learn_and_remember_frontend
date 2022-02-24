import axios from 'axios';
import React, { Component } from 'react';
import Skills from '../Skill/Skills';
import Loading from '../Loading/Loading';
import NetworkError from '../Network/Network';
import SkillService from '../../services/skill_service';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      skills: [],
      page: 1
    }
  }

  componentDidMount() {
    SkillService.fetchSkillsByStatus(2, 1).then((response) => {
        this.setState({
          isLoaded: true,
          skills: response
        })
    })
  }

  render() {
    const { error, isLoaded, skills } = this.state;

    if (error) {
      return <NetworkError />
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <div>
        {skills.map(skill => (
          <Skills key={skill.id} skill={skill} />
        ))}
      </div>
    );
  }
}

export default Index;
