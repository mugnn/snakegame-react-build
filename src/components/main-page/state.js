import { createGlobalState } from "react-hooks-global-state";

/* variáveis de estado global que armazenam de informações do usuário a estatísticas de partidas que serão inseridas 
  posteriormente no banco de dados. Além da lista de informações da partida que são renderizados a cada ciclo de vida
  do jogo.
  
  Outros tipos de informação são armazenados:
    globalState: define se o jogo está finalizado, parado, em andamento ou nenhum dos 3 (-1, 0, 1, null); 
    quit: se o usuário interrompeu a partida o valor final (final) é definido como "Unfinished";
    getSnakeAction: escuta as ações do usuário para contar o número de movimentações feitas ao total;
    loadIntoDatabase: é disparado no fim do ciclo de vida do jogo e define quando as informações da partida devem ser carregadas no banco de dados;
    userID: contém o ID do usuário da sessão atual;
    matchesQueue: é uma lista que contém listas das estatísticas das ultimas 10 partidas jogadas pelo usuário da sessão atual;
    loadQueueData: define quando devem ser renderizados os componentes que exibem o histórico das partidas;
    score, moves, final e time são variáveis de cada partida jogada e são resetadas no fim do ciclo de vida do jogo. 
*/

const { setGlobalState, useGlobalState } = createGlobalState({
  globalState: null,
  quit: true,
  getSnakeAction: false,
  loadIntoDatabase: false,
  userID: null,
  matchesQueue: [],
  loadQueueData: false,

  //match-statistics
  score: 0,
  moves: 0,
  final: null,
  time: 0,
});

//match-statistics actions:
export const setLoadQueueData = () => {
  setGlobalState('loadQueueData', true);
};

export const resetLoadQueueData = () => {
  setGlobalState('loadQueueData', false);
};

export const setMatchQueue = (queue) => {
  setGlobalState('matchesQueue', queue)
};

export const updateScore = (currentScore) => {
  setGlobalState('score', currentScore);
};

export const updateMoves = (currentMoves) => {
  setGlobalState('moves', currentMoves);
};

export const finalResult = (final) => {
  setGlobalState('final', final);
};

export const finalTime = (final) => {
  setGlobalState('time', final);
};

export const resetMatchValues = () => {
  setGlobalState('score', 0);
  setGlobalState('moves', 0);
  setGlobalState('final', null);
  setGlobalState('time', 0);
};

//user-id
export const setUserID = (id) => {
  setGlobalState('userID', id);
};

//load-into-database actions:
export const allowLoad = () => {
  setGlobalState('loadIntoDatabase', true);
};
export const denyLoad = () => {
  setGlobalState('loadIntoDatabase', false);
};

//get-snake-action actions:
export const getAction = () => {
  setGlobalState('getSnakeAction', true);
};
export const resetAction = () => {
  setGlobalState('getSnakeAction', false);
};

//global-state actions:
export const setNull = () => {
  setGlobalState('globalState', null);
};
export const setFinished = () => {
  setGlobalState('globalState', -1);
};
export const setPause = () => {
  setGlobalState('globalState', 0);
};
export const setContinue = () => {
  setGlobalState('globalState', 1);
};

//quit actions:
export const setQuit = () => {
  setGlobalState('quit', true);
};
export const resetQuit = () => {
  setGlobalState('quit', false);
};

//static mutable variables:
export let verifyStop = {
  vState: null,
  vAdvMode: false,
};

export { useGlobalState };
