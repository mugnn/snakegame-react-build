import './index.css'
import Variables from '../../../loginbox/user-data'
// eslint-disable-next-line
import MatchComponent from '../match-component/matchComponent'
import { useGlobalState, denyLoad, resetMatchValues } from '../../state'
import { useEffect } from 'react'
import MatchOps from '../../get-push-match'

const RightSideComponents = () => {
  const [userID] = useGlobalState('userID');
  const [load] = useGlobalState('loadIntoDatabase');

  //match-variables
  const [result] = useGlobalState('final');
  const [finalScore] = useGlobalState('score');
  const [moves] = useGlobalState('moves');
  const [time] = useGlobalState('time');

  useEffect(() => {
    if (load) {
      const getPushMatch = new MatchOps(result, finalScore, moves, time);
      getPushMatch.getNewMatch(userID).then((matchID) => {
        getPushMatch.insertValues(matchID);
      });
      resetMatchValues();
      denyLoad();
    }
    // eslint-disable-next-line
  }, [load]);

  return(
    <div id='user-historic-column'>
      <div id='user-info'>
        <img id='user-main-section-pic' alt='user-pfp' src={ Variables.pic_id } />
        <p id='user-main-section-name'>@{ Variables.user_name }</p>
      </div>
      <div id='match-queue'>
      </div>
    </div>
  )
}

export default RightSideComponents