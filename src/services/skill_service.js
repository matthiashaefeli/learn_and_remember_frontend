import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';
const METHOD = 'post';

class SkillService {
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
      (result.data.errors) ? alert(result.data.errors[0].message) : window.location = '/skills';
    })
  }
  fetchSkill = (id, setSkill) => {
    axios({
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
      setSkill(result.data.data.fetchSkill)
    })
  }
}

export default new SkillService();