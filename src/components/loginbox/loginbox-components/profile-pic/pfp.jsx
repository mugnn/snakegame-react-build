import React, { useState, useEffect } from 'react'
import './index.css'

// componente responsável por renderizar a foto de perfil e esconder a "default-section" para exibir a seção de seleção de fotos

const ProfilePic = () => {
  const[wasPressed, setPressed] = useState(false);

  useEffect(() => {
    document.getElementById('default-section').style.display = 'none';
    document.getElementById('pic-select-section').style.display = 'flex';
  }, [wasPressed])

  return(
    <div className='profile-pic-box' onClick={() => setPressed(!wasPressed)}>
      <div id='pic-box'>
        <p id='button-symbol'>?</p>
      </div>
      <img id='pfp-pic' alt='pfp' src=''/>
    </div>
  )
}

export default ProfilePic