import './index.css'

const CurrentUserStats = () => {
  return(
    <div id='current-user-stats'>
      <div id='u-stats-left'>
        <p className='u-text'>MAX SCORE</p>
        <p className='u-text' id='max-score-itself'>--</p>
      </div>
      <div id='u-stats-right'>
        <p className='u-text'>MOVES</p>
        <p className='u-text' id='moves-itself'>--</p>
      </div>
    </div>
  )
}

export default CurrentUserStats