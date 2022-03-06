import axios from 'axios';
const API_URL = 'https://easyremindme.herokuapp.com/graphql';
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

  createOrUpdateUserSetting(token, first_month, five_month, year) {
    return axios({
      url: API_URL,
      method: METHOD,
      data: {
        query: `
          mutation {
            createOrUpdateUserSetting(input: {
                authenticate: {
                  token: "${token}"
                },
                params: {
                  firstMonth: ${first_month},
                  fiveMonth: ${five_month},
                  year: ${year}
                }
            }) {
              setting {
                id
                firstMonth
                fiveMonth
                year
                user {
                  id
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
    })
  }
}

export default new SettingService();