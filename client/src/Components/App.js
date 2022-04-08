import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import NavBar from './NavBar'
import Profile from './Profile'

function App() {
  return (
    <div>
      <h1>yoyo</h1>
      <p>yo</p>
    <NavBar/>

    <Routes>
        
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/profile" element={<Profile/>}/>
   

    
  </Routes>
  </div>
  );
}

export default App;
