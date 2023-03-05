import React, { Component } from 'react';
import Home from './Views/Home';
import Nav from './components/Nav'
import Login from './Views/Login';
import Signup from './Views/Signup';
import Catch from './Views/Catch';
import Battle from './Views/Battle';
import Lore from './Views/Lore';
import Profile from './Views/Profile';
import Footer from './components/Footer';

import "./App.css";

import {Routes, Route, BrowserRouter  } from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 0
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="darker">
          <div className="dark">
            <div className="opacity">
              <Nav/>
              
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='/Signup' element={<Signup />}/>
                <Route path='/Catch' element={<Catch />}/>
                <Route path='/Battle' element={<Battle />}/>
                <Route path='/Lore' element={<Lore />}/>
                <Route path='/Profile' element={<Profile />}/>

              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
}