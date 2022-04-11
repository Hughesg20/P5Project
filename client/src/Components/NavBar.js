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

  return (
    <span style={navbar}>
      <Link to="/home"  style={linkStyle}>Home</Link>
      <Link to="/" style={linkStyle}>login</Link>
      <Link to="/signup" style={linkStyle}>signup</Link>
      <Link to="/profile" style={linkStyle}>profile</Link>
    </span>
  )
}

export default NavBar