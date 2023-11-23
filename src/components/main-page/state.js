import { createGlobalState } from "react-hooks-global-state";

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
