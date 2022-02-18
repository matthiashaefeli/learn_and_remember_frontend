import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';
const METHOD = 'post';

class SkillService {
  addSkill(token, title, language, status) {
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
  fetchSkill = (id, setSkill, setLanguage, setComments, setUser) => {
    axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
        query {
          fetchSkill(id: ${id}) {
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
      setLanguage(result.data.data.fetchSkill.language)
      setUser(result.data.data.fetchSkill.user)
      setComments(result.data.data.fetchSkill.comments)
    })
  }
}

export default new SkillService();