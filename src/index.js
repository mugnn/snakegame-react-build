import { BrowserRouter, Routes, Route, /*Link*/ } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login-page';
import Main from './pages/main-page';
import './index.css';


const App = () => {
  return (
  <BrowserRouter>
    {/* <Link to='/'>page</Link> */}
    {/* <Link to='/about'>file</Link> */}
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
