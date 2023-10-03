import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <h3 className='navbar-logo'>Logo</h3> 
        <ul className='navbar-ul'>
            <li>About</li>
            <li>Member</li>
        </ul>
    </nav>
  )
}

export default Navbar
