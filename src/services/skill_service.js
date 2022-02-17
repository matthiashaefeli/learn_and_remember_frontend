import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';

class SkillService {
  addSkill(token, title, language, status) {
    axios({
      url: API_URL,
      method: 'post',
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
}

export default new SkillService();