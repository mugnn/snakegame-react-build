import './index.css'
import Variables from '../../../loginbox/user-data'
import MatchComponent from '../match-component/matchComponent'
import { useGlobalState, denyLoad } from '../../state'
import { useEffect } from 'react'

const RightSideComponents = () => {
  // const [userID] = useGlobalState('userID');
  const [load] = useGlobalState('loadIntoDatabase');

  useEffect(() => {
    console.log(load)
    if (load) {
  
      //call api control class (get-push-match.js)
      
      denyLoad();
    }
  }, [load]);

  return(
    <div id='user-historic-column'>
      <div id='user-info'>
        <img id='user-main-section-pic' alt='user-pfp' src={ Variables.pic_id } />
        <p id='user-main-section-name'>@{ Variables.user_name }</p>
      </div>
      <div id='match-queue'>
        <MatchComponent />
      </div>
    </div>
  )
}

export default RightSideComponents