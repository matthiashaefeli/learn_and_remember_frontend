import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';
const METHOD = 'post';

class SkillService {
  fetchSkillsByUser(user_id, status, page) {
    return axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
        query {
          fetchSkillsByUser(userId: ${user_id}, status: ${status}, page: ${page}) {
            id
            title
            language {
              label
            }
            status
          }
        }
        `
      }
    }).then((result) => {
      return result.data.data['fetchSkillsByUser']
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      })
    });
  }

  fetchSkillsByStatus(status, page) {
    return axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
          query {
            fetchSkillsByStatus(status: ${status}, page: ${page}) {
              id
              title
              language {
                label
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
      return result.data.data['fetchSkillsByStatus']
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      })
    });
  }

  fetchSkillsByLanguage(language, page) {
    return axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
          query {
            fetchSkillsByLanguage(language: "${language}", page: ${page}) {
              id
              title
              language {
                label
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
      return result.data.data['fetchSkillsByLanguage']
    },
    error => {
      return error
    });
  }

  addSkill(token, title, language, status, body) {
    axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
          mutation {
            addSkill(
              input: {
                authenticate: { token: "${token}" },
                params: {
                  title: "${title}",
                  body: "${body}",
                  language: "${language.label}",
                  status: ${status.value} }
                }
              ) {
              skill {
                id
                title
                status
                language {
                  label
                }
                user {
                  name
                  email
                  verified
                }
              }
            }
          }
        `
      }
    }).then((result) => {
      (result.data.errors) ? alert(result.data.errors[0].message) : window.location = '/user';
    })
  }

  updateSkill(token, title, language, status, body, id) {
    axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
        mutation {
          updateSkill(input: {
              authenticate: {
                token: "${token}"
              },
              params: {
                id: ${id},
                title: "${title}",
                body: "${body}",
                language: "${language.label}",
                status: ${status.value}
              }
            }) {
              skill {
              id
              title
              status
              language {
                label
              }
              user {
                name
                email
                verified
              }
            }
          }
        }
        `
      }
    }).then((result) => {
      (result.data.errors) ? alert(result.data.errors[0].message) : window.location = '/skills/' + id;
    })
  }

  fetchSkill = (id) => {
    return axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
        query {
          fetchSkill(id: ${id}) {
            id
            title
            body
            status
            language {
              label
            }
            user {
              id
              name
              email
              verified
            }
            comments {
              id
              body
              user {
                name
              }
            }
          }
        }
        `
      }
    }).then((result) => {
      return result.data.data.fetchSkill
    })
  }

  deleteSkill(id, token) {
    axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
          mutation {
            deleteSkill(input: {
              authenticate: { token: "${token}" },
              skillId: ${id}
            })  {
              skill {
                id
              }
            }
          }
        `
      }
    }).then((result) => {
      (result.data.errors) ? alert(result.data.errors[0].message) : window.location = '/user';
    })
  }
}

export default new SkillService();