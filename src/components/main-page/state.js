import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  globalState: null,
  quit: true,
  getSnakeAction: false,
  loadIntoDatabase: false,
  userID: null,
});

export const setUserID = (id) => {
  setGlobalState('userID', id);
}

//load-into-database actions:
export const allowLoad = () => {
  setGlobalState('loadIntoDatabase', true);
}
export const denyLoad = () => {
  setGlobalState('loadIntoDatabase', false);
}

//get-snake-action actions:
export const getAction = () => {
  setGlobalState('getSnakeAction', true);
}
export const resetAction = () => {
  setGlobalState('getSnakeAction', false);
}

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
