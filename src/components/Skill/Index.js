import axios from 'axios';
import React, { Component } from 'react';
import Skill from '../Skill/Skill';
import Loading from '../Loading/Loading';
import NetworkError from '../Network/Network'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      skills: [],
    }
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:3000/graphql',
      method: 'post',
      data: {
        query: `
          query {
            fetchSkillsByStatus(status: ${this.props.skill_status}) {
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

    if (error) {
      return <NetworkError />
    }

    if (!isLoaded) {
      return <Loading />
    }

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
