import React, { useState, useEffect } from 'react';
import './index.css'
import Variables from '../../user-data';

const LinkButton = (props) => {
  const[wasPressed, setPressed] = useState(false);
  
  useEffect(() => {
    const inputBox = document.getElementById('input-section');
    Variables.user_name = inputBox.value

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
    } else if (props.name === 'START') {

      /*
      function (verify if values is ok) {
        function (verify in database) {
          if ok {
            <link to snakegame/>
          } else {
            function (alert => values doesn't match with any value in database)
          }
        }
      } else{
        function (alert => missing password or pic)
      }
      */

    } else if (props.name === 'CREATE') {

      /*
      function (verify if values is ok) {
        function (verify in database) {
          if ok {
            function (push values into database)
            <link to snakegame/>
          } else {
            function (alert => this set of values already exists in database)
          }
        }
      } else{
        function (alert => missing password or pic)
      }
      */

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