import React, { useState, useEffect } from 'react';
import './index.css'

const LinkButton = (props) => {
  const[wasPressed, setPressed] = useState(false);

  useEffect(() => {
    if(props.name === 'CANCEL') {
      document.getElementById('default-section').style.display = 'flex';
      document.getElementById('pic-select-section').style.display = 'none';
    }
  }, [wasPressed, props.name])

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