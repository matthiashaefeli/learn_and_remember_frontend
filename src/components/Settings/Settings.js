import React, { useEffect, useState } from 'react';
import AuthService from '../../services/auth_service';
import SettingService from '../../services/setting_service';

function Settings() {
  const [firstMonth, setFirstMonth] = useState('')
  const [fiveMonth, setfiveMonth] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    const userId = AuthService.getCurrentUserId();
    SettingService.fetchUserSettings(userId).then((response) => {
      setFirstMonth(response[0].firstMonth)
      setfiveMonth(response[0].fiveMonth)
      setYear(response[0].year)
    })
  },[])

function handleChange() {

}

  return(
    <div>
      <div>
        <label>Send Email after 1 Month:</label>
        <input
            type="checkbox"
            checked={firstMonth}
            onChange={handleChange}
          />
      </div>
      <div>
        <label>Send Email after 5 Months:</label>
        <input
            type="checkbox"
            checked={fiveMonth}
            onChange={handleChange}
          />
      </div>
      <div>
        <label>Send Email every Year:</label>
        <input
            type="checkbox"
            checked={year}
            onChange={handleChange}
          />
      </div>
    </div>
  )
}

export default Settings
