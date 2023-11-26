import { createGlobalState } from "react-hooks-global-state";

// variavéis de estado global que monitoram a página atual bem como o estado de autenticação para a criação de uma sessão de usuário.
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