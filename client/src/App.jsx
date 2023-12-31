import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home';
import Login from './pages/Login/Login'

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
