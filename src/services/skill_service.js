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
                  languageId: ${language},
                  status: ${status} }
                }
              ) {
              skill {
                id
                title
                status
                language {
                  name
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