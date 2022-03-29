import axios from 'axios';
const API_URL = 'https://easyremindme.herokuapp.com/graphql';

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

  fetchLanguagesBySkill() {
    axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          query {
            fetchLanguagesBySkill {
              label
            }
          }
        `
      }
    }).then((result) => {
      localStorage.setItem('languagesBySkill', JSON.stringify(result.data.data.fetchLanguagesBySkill))
    })
  }

  getLanguagesBySkill() {
    return JSON.parse(localStorage.getItem('languagesBySkill'))
  }
}

export default new LanguageService();