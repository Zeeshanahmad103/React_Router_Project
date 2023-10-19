import React from 'react'

export default function Navbar() {

  let navBox = {
    padding: '10px',
    margin: '20px',
    textAlign: 'center',
  }
  return (
    <div style={navBox}>
      <a href='/'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='/About'>About us</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='/Contact'>Contact us</a>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}
