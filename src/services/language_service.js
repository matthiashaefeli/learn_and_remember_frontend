import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';

class LanguageService {
  fetchLanguages() {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          query {
            fetchLanguages {
              label
            }
          }
        `
      }
    }).then((result) => {
      localStorage.setItem('languages', JSON.stringify(result.data.data.fetchLanguages))
    })
  }

  getLanguages() {
    return JSON.parse(localStorage.getItem('languages'))
  }
}

export default new LanguageService();