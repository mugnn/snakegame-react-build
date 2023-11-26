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
  //variáveis globais do usuário
  const [userID] = useGlobalState("userID");
  const [load] = useGlobalState("loadIntoDatabase");
  const [loadQueue] = useGlobalState("loadQueueData");

  //match-variables -> serão carregadas ao fim da partida
  const [result] = useGlobalState("final");
  const [finalScore] = useGlobalState("score");
  const [moves] = useGlobalState("moves");
  const [time] = useGlobalState("time");
  const [matchesQueue] = useGlobalState("matchesQueue");

  useEffect(() => {
    var textContainer = document.getElementById("user-main-section-name-container");
    var textElement = document.getElementById("user-main-section-name");

    /* quando carregada ajusta o tamanho da fonte em relação
    ao componente pai */

    var containerWidth = textContainer.offsetWidth;
    var textLength = textElement.textContent.length;

    var scaleFactor = 0.16; 
    var desiredFontSize = (containerWidth / textLength) * scaleFactor;

    var maxFontSize = 3;
    desiredFontSize = Math.min(desiredFontSize, maxFontSize);
    textElement.style.fontSize = desiredFontSize + "vmin";
  }, []);

  //caso alguma partida exista ou seja adicionada a fila, o texto (no-ref-found-text) é desativado
  useEffect(() => {
    if (matchesQueue.length !== 0) {
      document.getElementById("no-ref-found-text").style.display = "none";
    }
  }, [matchesQueue]);

  //toda vez que o estado do loadQueue for alterado ele cria um novo match_id com base no ID do usuário
  useEffect(() => {
    if (loadQueue) {
      const matchQueue = new MatchQueue(userID);
      matchQueue.getMatchQueue();
      resetLoadQueueData();
    }
    // eslint-disable-next-line
  }, [loadQueue]);

  //carrega dentro do banco de dados as informações da partida pós-término
  useEffect(() => {
    if (load) {
      const getPushMatch = new MatchOps(result, finalScore, moves, time);
      getPushMatch.getNewMatch(userID);
      resetMatchValues();
      denyLoad();
    }
    // eslint-disable-next-line
  }, [load, userID]);

  //procura dentro da fila de partidas a que possui o maior score
  const scores = matchesQueue.map((matchData) => matchData[0]);
  const highestScore = Math.max(...scores);

  return (
    <div id="user-historic-column">
      <div id="user-info">
        <img id="user-main-section-pic" alt="user-pfp" src={Variables.pic_id} />
        <div id="user-main-section-name-container">
          <p id="user-main-section-name">@{Variables.user_name}</p>
        </div>
      </div>
      <p id="no-ref-found-text">No References Found!</p>
      <div id="match-queue">
        {matchesQueue.map((matchData, index) => (
          <MatchComponent
            key={index}
            matchData={matchData}
            highestScore={highestScore}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSideComponents;
