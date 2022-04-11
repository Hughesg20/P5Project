import React,{useEffect, useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import '../App.css';
import {styled} from 'styled-components'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import NavBar from './NavBar'
import Profile from './Profile'

const linkStyle = {
  textAlign: 'center',
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

function App() {


  return (
    <div>
    <NavBar/>

    <Routes>
        
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<SignUp/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/profile" element={<Profile/>}/>
   

    
  </Routes>
  </div>
  );
}

export default App;
