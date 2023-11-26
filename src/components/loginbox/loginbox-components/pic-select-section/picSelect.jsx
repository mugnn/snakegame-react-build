import './index.css'
import images from './images'
import LinkButton from '../anchor-button/button'
import React, {useState, useEffect, useRef} from 'react'
import Variables from '../../user-data'

// componente responsável por selecionar e atualizar a renderização das fotos, e ao fim, resgatar seu valor para ser inserido no banco de dados (Variables.pic_id)

const PicSelectSection = () => {
  const[isSelected, setIsSelected] = useState(false);
  const[num, setNum] = useState(15);
  const lastNum = useRef(15);
  const contClick = useRef(0);
  let link = useRef('');

  // ao clicar a imagem "cresce", indicando estar selecionada

  useEffect(() => {
    if (isSelected) {
      const image = document.getElementsByClassName('image')[num]
      const lastImage = document.getElementsByClassName('image')[lastNum.current]
      const pfp = document.getElementById('pfp-pic')
      contClick.current++;

      switch (num) {
        case 0:
          link.current = images.img1
          break;
        case 1:
          link.current = images.img2
          break;
        case 2:
          link.current = images.img3
          break;
        case 3:
          link.current = images.img4
          break;
        case 4:
          link.current = images.img5
          break;
        case 5:
          link.current = images.img6
          break;
        case 6:
          link.current = images.img7
          break;
        case 7:
          link.current = images.img8
          break;
        case 8:
          link.current = images.img9
          break;
        case 9:
          link.current = images.img10
          break;
        case 10:
          link.current = images.img11
          break;
        case 11:
          link.current = images.img12
          break;
        case 12:
          link.current = images.img13
          break;
        case 13:
          link.current = images.img14
          break;
        case 14:
          link.current = images.img15
          break;
        default:
          break;
      }

      pfp.src = link.current
      Variables.pic_id = link.current

      document.getElementById('pic-box').style.display = 'none'
      document.getElementById('pfp-pic').style.display = 'flex'

      if (lastNum.current !== num) {
        image.style.width = '10vmin'
        image.style.height = '10vmin'
        image.style.borderRadius = '1.25vmin'
        image.style.transition = '0.2s'

        lastImage.style.width = '8vmin'
        lastImage.style.height = '8vmin'
        lastImage.style.borderRadius = '1vmin'
        lastImage.style.transition = '0.2s'
        
        contClick.current = 0
      } else if (!(contClick.current % 2 === 0)) {
        image.style.width = '8vmin'
        image.style.height = '8vmin'
        image.style.borderRadius = '1vmin'
        image.style.transition = '0.2s'

        document.getElementById('pic-box').style.display = 'flex'
        document.getElementById('pfp-pic').style.display = 'none'
        Variables.pic_id = ''
      } else {
        image.style.width = '10vmin'
        image.style.height = '10vmin'
        image.style.borderRadius = '1.25vmin'
        image.style.transition = '0.2s'
      }

      lastNum.current = num
    }
    setIsSelected(false)
  }, [num, isSelected])

  return(
    <div className='pic-section'>
      <div id='pic-columns' onClick={ () => setIsSelected(!isSelected) }>
        <div className='pic-row' >
          <img className='image' src={ images.img1 } alt='pic1' id='pic 01' onClick={ () => setNum(0) } />
          <img className='image' src={ images.img2 } alt='pic2' id='pic 02' onClick={ () => setNum(1) } />
          <img className='image' src={ images.img3 } alt='pic3' id='pic 03' onClick={ () => setNum(2) } />
        </div>
        <div className='pic-row'>
          <img className='image' src={ images.img4 } alt='pic4' id='pic 04' onClick={ () => setNum(3) } />
          <img className='image' src={ images.img5 } alt='pic5' id='pic 05' onClick={ () => setNum(4) } />
          <img className='image' src={ images.img6 } alt='pic6' id='pic 06' onClick={ () => setNum(5) } />
        </div>
        <div className='pic-row'>
          <img className='image' src={ images.img7 } alt='pic7' id='pic 07' onClick={ () => setNum(6) } />
          <img className='image' src={ images.img8 } alt='pic8' id='pic 08' onClick={ () => setNum(7) } />
          <img className='image' src={ images.img9 } alt='pic9' id='pic 09' onClick={ () => setNum(8) } />
        </div>
        <div className='pic-row'>
          <img className='image' src={ images.img10 } alt='pic10' id='pic 10' onClick={ () => setNum(9) } />
          <img className='image' src={ images.img11 } alt='pic11' id='pic 11' onClick={ () => setNum(10) } />
          <img className='image' src={ images.img12 } alt='pic12' id='pic 12' onClick={ () => setNum(11) } />
        </div>
        <div className='pic-row'>
          <img className='image' src={ images.img13 } alt='pic13' id='pic 13' onClick={ () => setNum(12) } />
          <img className='image' src={ images.img14 } alt='pic14' id='pic 14' onClick={ () => setNum(13) } />
          <img className='image' src={ images.img15 } alt='pic15' id='pic 15' onClick={ () => setNum(14) } />
          <img className='image' alt='ref-pic' id='ref-pic'/>
        </div>
      </div>
      <div id='select-cancel-button'>
        <LinkButton name='SELECT' />
        <LinkButton name='CANCEL' color='#a0a0a0' num={ num } />
      </div>
    </div>
  )
}

export default PicSelectSection