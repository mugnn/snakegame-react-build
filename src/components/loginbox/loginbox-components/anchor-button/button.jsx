import React, { useState, useEffect } from 'react';
import './index.css'
import Variables from '../../user-data';

const LinkButton = (props) => {
  const[wasPressed, setPressed] = useState(false);

  useEffect(() => {
    if(props.name === 'CANCEL') {
      document.getElementById('default-section').style.display = 'flex';
      document.getElementById('pic-select-section').style.display = 'none';
      document.getElementById('pic-box').style.display = 'flex'
      document.getElementById('pfp-pic').style.display = 'none'
    } else if (props.name === 'SELECT') {
      document.getElementById('default-section').style.display = 'flex';
      document.getElementById('pic-select-section').style.display = 'none';
      document.getElementById('pic-box').style.display = 'none'
      document.getElementById('pfp-pic').style.display = 'flex'
    }
    console.log(Variables.pic_id)
  }, [wasPressed])

  const styleColor = {
    backgroundColor: props.color,
  };
  
  return(
    <div className='link-button' style={ styleColor } onClick={() => setPressed(!wasPressed)}>
      <p id='button-text'>{ props.name }</p>
    </div>
  )
}

export default LinkButton