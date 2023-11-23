import "./index.css";
import Variables from "../../../loginbox/user-data";
// eslint-disable-next-line
import MatchComponent from "../match-component/matchComponent";
import {
  useGlobalState,
  denyLoad,
  resetMatchValues,
  resetLoadQueueData,
} from "../../state";
import { useEffect } from "react";
import MatchOps from "../../get-push-match";
import MatchQueue from "./match-queue";

const RightSideComponents = () => {
  const [userID] = useGlobalState("userID");
  const [load] = useGlobalState("loadIntoDatabase");
  const [loadQueue] = useGlobalState("loadQueueData");

  //match-variables
  const [result] = useGlobalState("final");
  const [finalScore] = useGlobalState("score");
  const [moves] = useGlobalState("moves");
  const [time] = useGlobalState("time");
  const [matchesQueue] = useGlobalState("matchesQueue");

  //aqui =)
  useEffect(() => {
    if(matchesQueue.length !== 0) {
      document.getElementById('no-ref-found-text').style.display = 'none'
    }
  }, [matchesQueue])

  useEffect(() => {
    if (loadQueue) {
      const matchQueue = new MatchQueue(userID); 
      matchQueue.getMatchQueue();
      resetLoadQueueData();
    }
    // eslint-disable-next-line
  }, [loadQueue])

  useEffect(() => {
    if (load) {
      const getPushMatch = new MatchOps(result, finalScore, moves, time);
      getPushMatch.getNewMatch(userID);
      resetMatchValues();
      denyLoad();
    }
    // eslint-disable-next-line
  }, [load, userID]);

  const scores = matchesQueue.map(matchData => matchData[0]);
  const highestScore = Math.max(...scores);

  return (
    <div id="user-historic-column">
      <div id="user-info">
        <img id="user-main-section-pic" alt="user-pfp" src={Variables.pic_id} />
        <p id="user-main-section-name">@{Variables.user_name}</p>
      </div>
      <p id="no-ref-found-text">No References Found!</p>
      <div id="match-queue">
        {matchesQueue.map((matchData, index) => (
          <MatchComponent key={ index } matchData={ matchData } highestScore={ highestScore } />
        ))}
      </div>
    </div>
  );
};

export default RightSideComponents;
