import './index.css';
import defeatImage from './assets/defeat.svg'
import unfinishedImage from './assets/unfinished.svg'
// eslint-disable-next-line
import starImage from './assets/star.png'

const MatchComponent = ({ matchData, highestScore }) => {
  const [score, moves, result, time] = matchData;
  let image;

  if (result === 'Defeat') {
    image = defeatImage;
  } else if (result === 'Unfinished') {
    image = unfinishedImage;
  }

  if (score === highestScore) {
    image = starImage;
  }
  
  return (
    <div id='match-component'>
      <img id='match-final-image' alt='match_final' src={ image } />
      <div id='stats-itself'>  
        <p id='result-content'>{ result }</p>
        <p id='score-content'>score: { score }</p>
        <p id='moves-content'>moves: { moves }</p>
        <p id='time-content'>time: { time }</p>
      </div>
    </div>
  )
};

export default MatchComponent;