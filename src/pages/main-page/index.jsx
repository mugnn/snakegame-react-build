import { useEffect } from 'react'
import CenterComponents from '../../components/main-page/main-page-components/center-components/centerComponents.jsx'
import TimeCounter from '../../components/main-page/main-page-components/left-side-components/timeCounter.jsx'
import RightSideComponents from '../../components/main-page/main-page-components/right-side-components/rightComponents.jsx'
import CurrentUserStats from '../../components/main-page/main-page-components/score-moves-stats/currentStats.jsx'
import './index.css'
import { setCurrentPage } from '../state.js'

// componente pai responsável por renderizar os componentes da tela de jogo.

const Main = () => {
  useEffect(() => {
    setCurrentPage('main');
  }, [])

  return(
    <div id='main-page'>
      <div id='left-main-section'>
        <p id='snakegame-logo'>snakegame</p>
        <TimeCounter />
        <CurrentUserStats />
      </div>
      <div id='center-main-section'>
        <CenterComponents />
      </div>
      <div id='right-main-section'>
        <RightSideComponents />
      </div>
    </div>
  )
}

export default Main