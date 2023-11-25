import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  currentPage: 'login',
  isAuthenticated: false,
});

export const setCurrentPage = (page) => {
  setGlobalState('currentPage', page);
};

export const setAuthenticated = (state) => {
  setGlobalState('isAuthenticated', state);
};

export { useGlobalState };