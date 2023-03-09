import React, { Component, useState, useEffect } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './views/Signup';
import Login from './views/Login';



export default function App() {
    const [user, setUser] = useState({});

    const getUserFromLocalStorage = () => {
        const foundUser = localStorage.getItem('user107')
        if (foundUser){
            return JSON.parse(foundUser)
        }
        return {}
    };




    // const [user, setUser] = useState(getUserFromLocalStorage());

  

    const logMeIn = (user) => {
        setUser(user);
    };
    const logMeOut = () => {
        setUser({});
        localStorage.removeItem('user107')
    };

    return (
        <Router>
            <div>
                <Nav user={user} logMeOut={logMeOut}/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/Login' element={<Login logMeIn={logMeIn}/>} />
                </Routes>

            </div>
        </Router>
    )

}