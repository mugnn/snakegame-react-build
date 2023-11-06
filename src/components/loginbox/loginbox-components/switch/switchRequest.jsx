import './index.css'
import React, { useState, useEffect } from 'react';
import Variables from '../../user-data';

const SwitchRequest = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  useEffect(() => {
    const login = document.getElementById('login');
    const register = document.getElementById('register');
    const inputLabel = document.getElementById('label-input-box');
    const button = document.getElementById('button-text');

    if (checkboxChecked) {
      login.style.color = 'white';
      register.style.color = 'black';
      button.textContent = "CREATE"
      Variables.current_button = 'create'
      inputLabel.textContent = "max: 16 characters"
    } else {
      login.style.color = 'black';
      register.style.color = 'white';
      button.textContent = "START"
      Variables.current_button = 'start'
      inputLabel.textContent = ""
    }

    [login, register].forEach((element) => {
      element.style.transition = '0.5s'
    })
  }, [checkboxChecked]);

  return (
    <label className='switch-component'>
      <p id='login' className='login-register'>LOGIN</p>
      <input type='checkbox' id='checkbox' onChange={() => setCheckboxChecked(!checkboxChecked)}/>
      <span className='slider' />
      <p id='register' className='login-register'>REGISTER</p>
    </label>
  )
}

export default SwitchRequest