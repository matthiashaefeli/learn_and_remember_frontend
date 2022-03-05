import axios from 'axios';
const API_URL = 'http://localhost:3000/graphql';
const METHOD = 'post';

class SettingService {
  fetchUserSettings(user_id) {
    return axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
        query {
          fetchUserSettings(userId: ${user_id}) {
            id
            firstMonth
            fiveMonth
            year
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
      return result.data.data.fetchUserSettings
    },
    error => {
    });
  }
}

export default new SettingService();