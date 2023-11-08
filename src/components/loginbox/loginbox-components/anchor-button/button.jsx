import React, { useState, useEffect} from 'react';
import Variables from '../../user-data';
import Verify from '../../check-in';
import './index.css'

const LinkButton = (props) => {
  const[wasPressed, setPressed] = useState(false);
  
  useEffect(() => {
    const inputBox = document.getElementById('input-section');
    Variables.user_name = inputBox.value

    if(wasPressed) {
      const verify = new Verify(Variables.user_name, Variables.pic_id, Variables.current_button)
      
      if(props.name === 'CANCEL') {
        const image = document.getElementsByClassName('image')[props.num]
        image.style.width = '8vmin'
        image.style.height = '8vmin'
        image.style.borderRadius = '1vmin'
        image.style.transition = '0.2s'

        document.getElementById('default-section').style.display = 'flex';
        document.getElementById('pic-select-section').style.display = 'none';
        document.getElementById('pic-box').style.display = 'flex'
        document.getElementById('pfp-pic').style.display = 'none'
        
        Variables.pic_id = ''
      } else if (props.name === 'SELECT') {
        document.getElementById('default-section').style.display = 'flex';
        document.getElementById('pic-select-section').style.display = 'none';
      } else if (Variables.current_button === 'start') {
        verify.validation()
      } else if (Variables.current_button === 'create') {
        verify.validation()
      }
      setPressed(false)
    } else {
      document.getElementById('default-section').style.display = 'flex';
      document.getElementById('pic-select-section').style.display = 'none';
    }
    // eslint-disable-next-line
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