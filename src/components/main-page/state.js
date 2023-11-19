import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  globalState: null,
  quit: true,
});

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
  vQuit: false,
  vAdvMode: false,
};

export { useGlobalState };
