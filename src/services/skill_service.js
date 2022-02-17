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
      debugger;
      // check result here and return something
    })
  }
}

export default new SkillService();