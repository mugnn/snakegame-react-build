import './index.css'
import gameTable from './assets/game-table.svg'

const GameBox = () => {
  return(
    <div id='game-box'>
      <p id='score-value'>--</p>
      <img id='game-table-img' alt='game-table' src={ gameTable } />
    </div>
  )
}

export default GameBox