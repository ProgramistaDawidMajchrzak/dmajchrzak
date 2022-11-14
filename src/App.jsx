import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import PasswordPage from './components/PasswordPage';
import TicketConfig from './components/TicketConfig';
import LogIn from './components/LogIn';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import heroImg from './assets/images/hero_img.png';
import Logo from './assets/images/Logo.png';
import UserContext from './components/UserContext';

function App() {
  const [validUser, setValidUser] = useState(null);
  return (
    <div className="App">
      <div className="content">
        <img src={Logo} alt="logo" />
        {/* <UserContext.Provider value={UserContext}> */}
        <UserContext.Provider value={{ validUser, setValidUser }}>

          {/* {!validUser ? <WelcomePage /> : <PasswordPage />} */}
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/ticket_config' element={<TicketConfig />} />
            <Route path='*' element={<LogIn />} />
          </Routes>

        </UserContext.Provider>
        {/* </UserContext.Provider> */}
        {/* <WelcomePage /> */}
        {/* <PasswordPage /> */}
        {/* <TicketConfig /> */}
      </div>
      <img src={heroImg} alt="main_image" />
    </div>
  )
}

export default App;
