import './styles.css'
import background from './assets/background-video.mp4'

const Background = () => {
  // plano de fundo da tela de login
  return(
    <div id='background-box'>
      <video id='background-video' autoPlay muted loop>
        <source src={ background } type='video/mp4'/>
      </video>
    </div>
  )
}

export default Background

