import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';
const METHOD = 'post';

class CommentService {
  addComment(token, body, skill_id) {
    axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
          mutation {
            addComment(input: {
              authenticate: { token: "${token}" },
              params: { body: "${body}",
                        skillId: ${skill_id} }
            }) {
              comment {
                body
                skill {
                  title
                }
                user {
                  email
                  name
                }
              }
            }
          }
        `
      }
    }).then((result) => {
      (result.data.errors) ? alert(result.data.errors[0].message) : window.location = '/skills/' + skill_id;
    })
  }
}

export default new CommentService();