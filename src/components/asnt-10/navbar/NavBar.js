import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <div className="container-fluid p-3 bg-warning">
        <ul className="nav nav-underline justify-content-evenly fs-5">  
  <li className="nav-item">
    <NavLink className="nav-link" to="register">Register</NavLink> 
    {/* NavLink active class will be applied */}
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="login">Login</NavLink>
  </li>
</ul>
    </div>
  )
}

export default NavBar