import './styles.css'
import snakeImage from './assets/snake.svg'

const SideBox = () => {
  return(
    <div id='sidebox'>
      <img alt='snakeImage' src= { snakeImage } id='snake-image'/>
    </div>
  )
}

export default SideBox