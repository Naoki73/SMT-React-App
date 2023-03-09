import React, { useState } from 'react';
import Home from './Views/Home';
import Nav from './components/Nav'
import Catch from './Views/Catch';
import Battle from './Views/Battle';
import Lore from './Views/Lore';
import Profile from './Views/Profile';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Footer from './components/Footer';


import "./App.css";

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {



  const [user, setUser] = useState({});

  const logMeIn = (user) => {
    setUser(user);
  };
  const logMeOut = () => {
    setUser({});
    localStorage.removeItem('user107')
  };


  return (
    <Router>
      <div className="darker">
        <div className="dark">
          <div className="opacity">
            <Nav user={user} logMeOut={logMeOut}/>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Catch' element={<Catch user={user}/>} />
              <Route path='/Battle' element={<Battle />} />
              <Route path='/Lore' element={<Lore user={user}/>} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Login' element={<Login logMeIn={logMeIn} />} />
              <Route path='/Signup' element={<Signup />} />


            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  )
}
