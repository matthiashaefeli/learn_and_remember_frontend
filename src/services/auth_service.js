import axios from 'axios';
const API_URL = 'https://easyremindme.herokuapp.com/graphql';

class AuthService {
  verifyAccount(id) {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          mutation {
              verifyUser(input: { params: {
                verifyId: "${id}"}}) {
                message
              }
          }
        `
      }
    }).then((result) => {
      if(result.data.errors) {
        alert("This is not going to work like that!")
      } else {
        window.location = '/signin'
      }
    })
  }
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
      (result.data.errors) ? alert("This is not going to work like that") : alert("Pleae check you email inbox, and verify email");
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
                id
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
  getCurrentUserId() {
    return JSON.parse(localStorage.getItem('user')).user.id
  }
}

export default new AuthService();