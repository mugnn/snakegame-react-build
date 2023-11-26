import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/login-page";
import Main from "./pages/main-page";
import "./index.css";
import { useGlobalState } from "./pages/state";

/* componente pai que renderiza todos os componentes filhos e cria uma rota entre as paginas "/" e "/game" 
  -> permite apenas que seja acessada a "/game" o usuário autenticado, caso contrário, será mandado de volta para a rota "/".
*/

const App = () => {
  const [isAuthenticated] = useGlobalState("isAuthenticated");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {isAuthenticated ? (
          <Route path="/game" element={<Main />} />
        ) : (
          <Route path="/game" element={<Navigate to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
