import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import{ useDispatch, useSelector } from "react-redux"
import{ toggleUser } from "./redux/userSlice"

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const navbar = {
  textAlign: 'right',
}

function NavBar() {
  const dispatch = useDispatch()
  const user = useSelector(state=> state.user)
  const [render, setRender] = useState(false)
  const [num,setNum] = useState(1)
  console.log(user)

  useEffect(()=>{
    if(user){
      setRender(true)
      setNum(2)
    } else {
      setRender(false)
      setNum(0)
    }
  },[user])


  const handleLogout = () => {
    fetch('/logout',{method: "DELETE"})
  }

  return (
    <span style={navbar}>
      <Link to="/" style={linkStyle}>login</Link>
      <Link to="/signup" style={linkStyle}>signup</Link>
      {render?<>
      <Link to="/home"  style={linkStyle}>Home</Link>
      <Link to="/profile" style={linkStyle}>profile</Link>
      </>: null}
      <button onClick={()=>{handleLogout()}}>Logout</button>
    </span>
  )
}

export default NavBar