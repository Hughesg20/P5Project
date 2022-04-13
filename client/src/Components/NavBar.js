import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const navbar = {
  textAlign: 'right',
}

function NavBar() {

  const handleLogout = () => {
    fetch('/logout',{method: "DELETE"})
  }

  return (
    <span style={navbar}>
      <Link to="/home"  style={linkStyle}>Home</Link>
      <Link to="/login" style={linkStyle}>login</Link>
      <Link to="/signup" style={linkStyle}>signup</Link>
      <Link to="/profile" style={linkStyle}>profile</Link>
      <button onClick={()=>{handleLogout()}}>Logout</button>
    </span>
  )
}

export default NavBar