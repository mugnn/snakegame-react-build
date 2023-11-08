import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login-page';
import Main from './pages/main-page';
import './index.css';


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/game' element={<Main />} />
    </Routes>
  </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
