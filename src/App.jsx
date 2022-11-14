import React, { useState } from 'react';
import TicketConfig from './components/TicketConfig';
import LogIn from './components/LogIn';
import './App.css';

import heroImg from './assets/images/hero_img.png';
import Logo from './assets/images/Logo.png';

import UserContext from './components/UserContext';

function App() {
  const [validUser, setValidUser] = useState(null);
  const [token, setToken] = useState(false);
  return (
    <div className="App">
      <div className="content">
        <img src={Logo} alt="logo" />
        <UserContext.Provider
          value={{ validUser, setValidUser, token, setToken }}
        >
          {!token ? <LogIn /> : <TicketConfig />}
        </UserContext.Provider>
      </div>
      <img src={heroImg} alt="main_image" />
    </div>
  )
}

export default App;
