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
  //const [matchesQueue] = useGlobalState("matchesQueue");

  useEffect(() => {
    if (loadQueue) {
      console.log(userID);
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

  return (
    <div id="user-historic-column">
      <div id="user-info">
        <img id="user-main-section-pic" alt="user-pfp" src={Variables.pic_id} />
        <p id="user-main-section-name">@{Variables.user_name}</p>
      </div>
      <div id="match-queue"></div>
    </div>
  );
};

export default RightSideComponents;
