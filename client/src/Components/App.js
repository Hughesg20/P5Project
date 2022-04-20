import React,{useEffect, useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import '../App.css';
import{ useDispatch, useSelector } from "react-redux"
import{ toggleUser } from "./redux/userSlice"
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
  const dispatch = useDispatch()
  const user = useSelector(state=> state.user)
  const [logedin,setLogedin] = useState(false)
  
useEffect(()=>{
  fetch("/me")
  .then((r) => {
    if (r.ok) {
      r.json().then((data) => {dispatch(toggleUser(data));});
    }
  });
},[])
  


  return (
    <div>
    <NavBar/>

    <Routes>
        
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/signup" element={<SignUp/>}/>
      {user? <>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      </>
      : null}
      
   

    
  </Routes>
  </div>
  );
}

export default App;
