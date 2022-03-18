import React from 'react';
import { useParams } from 'react-router-dom';
import AuthService from '../../services/auth_service';

function ComponentName() {
  const { id } = useParams()

  function handleClick() {
    AuthService.verifyAccount(id)
  }

  return (
    <div>
      <button className='button-6' onClick={handleClick}>Verify Account</button>
    </div>
  );
};

export default ComponentName;
