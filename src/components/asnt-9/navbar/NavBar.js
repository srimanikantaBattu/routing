import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className="container-fluid p-3 bg-dark text-white">
        <ul className="nav nav-underline justify-content-end fs-5">
  <li className="nav-item me-3">
    <Link className="nav-link link-light" to="home">Home</Link>
  </li>
  <li className="nav-item me-3">
    <Link className="nav-link link-light" to="signup">Signup</Link>
  </li>
  <li className="nav-item me-3">
    <Link className="nav-link link-light" to="signin">Signin</Link>
  </li>
  <li className="nav-item me-3">
    <Link className="nav-link text-white" to="technologies">Technologies</Link>
  </li>
</ul>
    </div>
  )
}

export default NavBar