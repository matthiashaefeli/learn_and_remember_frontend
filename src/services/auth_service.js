import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';

class AuthService {
  register(name, email, password) {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          mutation {
            addUser(input: { params: { name: "${name}", email: "${email}", password: "${password}" }}) {
              user {
                name
                email
              }
            }
          }
        `
      }
    }).then((result) => {
      (result.data.errors) ? alert(result.data.errors[0].message) : alert("Pleae check you email inbox, and verify email");
    })
  }
  login(name, email, password) {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          mutation {
            signInUser(input: { params: { name: "${name}", email: "${email}", password: "${password}" }}) {
              authenticate {
                token
              }
              user {
                name
                email
                verified
              }
            }
          }
        `
      }
    }).then((result) => {
      if(result.data.data.signInUser.authenticate.token) {
        localStorage.setItem('user', JSON.stringify(result.data.data.signInUser))
      }
      window.location = '/'
    })
  }
  logout() {
    localStorage.removeItem('user');
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();