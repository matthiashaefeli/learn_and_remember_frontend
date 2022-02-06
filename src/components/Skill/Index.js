import axios from 'axios';
import React, { Component } from 'react';
import Skill from '../Skill/Skill';

class Index extends Component {
  state = {
    error: null,
    isLoaded: false,
    skills: [],
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
          query {
            fetchSkillsByStatus(status: 0) {
              id
              title
              language {
                name
              }
              user {
                name
                email
                verified
              }
              status
            }
          }
        `
      }
    }).then((result) => {
      this.setState({
        isLoaded: true,
        skills: result.data.data['fetchSkillsByStatus']
      })
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      })
    });
  }

  render() {
    const { error, isLoaded, skills } = this.state;
    return (
      <div>
        {skills.map(skill => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    );
  }
}

export default Index;