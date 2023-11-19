import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  globalState: null,
  quit: true,
  getSnakeAction: false,
});

export const getAction = () => {
  setGlobalState('getSnakeAction', true)
}
export const resetAction = () => {
  setGlobalState('getSnakeAction', false)
}

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

export const setQuit = () => {
  setGlobalState('quit', true);
};
export const resetQuit = () => {
  setGlobalState('quit', false);
};

export let verifyStop = {
  vState: null,
  vAdvMode: false,
};

export { useGlobalState };
