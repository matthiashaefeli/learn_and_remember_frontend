import React, { useEffect, useState } from 'react';
import AuthService from '../../services/auth_service';
import SettingService from '../../services/setting_service';
import './styles.scss';

function Settings() {
  const [firstMonth, setFirstMonth] = useState(false)
  const [fiveMonth, setFiveMonth] = useState(false)
  const [year, setYear] = useState(false)
  const [user, setUser] = useState(AuthService.getCurrentUser())

  useEffect(() => {
    SettingService.fetchUserSettings(user.user.id).then((response) => {
      setFirstMonth(response[0].firstMonth)
      setFiveMonth(response[0].fiveMonth)
      setYear(response[0].year)
    })
  },[])

  useEffect(() => {
    SettingService.createOrUpdateUserSetting(user.authenticate.token, firstMonth, fiveMonth, year)
  }, [firstMonth, fiveMonth, year])



function handleChange(e) {
  switch(e.target.name) {
    case 'FirstMonth': setFirstMonth(!firstMonth); break;
    case 'FiveMonth': setFiveMonth(!fiveMonth); break;
    case 'Year': setYear(!year); break;
  }
}

  return(
    <div className='settings-container'>
      <h2>My Email reminder settings</h2>
      <div>
        <label>Send Email after 1 Month:</label>
        <input
            name='FirstMonth'
            type="checkbox"
            checked={firstMonth}
            onChange={handleChange.bind(this)}
          />
      </div>
      <div>
        <label>Send Email after 5 Months:</label>
        <input
            name='FiveMonth'
            type="checkbox"
            checked={fiveMonth}
            onChange={handleChange}
          />
      </div>
      <div>
        <label>Send Email every Year:</label>
        <input
            name='Year'
            type="checkbox"
            checked={year}
            onChange={handleChange}
          />
      </div>
    </div>
  )
}

export default Settings
