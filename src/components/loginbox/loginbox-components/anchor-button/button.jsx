import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Variables from '../../user-data';
import Verify from '../../check-in';
import './index.css'
import { setAuthenticated } from '../../../../pages/state';

const LinkButton = (props) => {
  const[wasPressed, setPressed] = useState(false);
  const navigate = useNavigate();

  /* toda vez que o botão é pressionado algumas combinações de ações são realizadas, elas são: 
    'start': reúne as informações e chama a classe que as verifica no banco de dados;
    'create': reúne as informações e chama a classe que as insere no banco de dados;
    'select': seleciona a foto de perfil no momento da criação;
    'cancel': cancela a operação de selecionar foto e volta pra interface inicial;
  */
  
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
      } else if (Variables.current_button === 'start' || Variables.current_button === 'create') {
        verify.validation((result) => {
          if (result) {
            setAuthenticated(true);
            navigate('/game');
          }
        });
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