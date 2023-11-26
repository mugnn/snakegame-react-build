import './styles.css'
import snakeImage from './assets/snake.svg'

// componente responsável por renderizar a caixa lateral na tela de início.

const SideBox = () => {
  return(
    <div id='sidebox'>
      <img alt='snakeImage' src= { snakeImage } id='snake-image'/>
    </div>
  )
}

export default SideBox