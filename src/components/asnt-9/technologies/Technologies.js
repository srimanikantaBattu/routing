import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Technologies() {
  return (
    <div className="container-fluid">
        <ul class="nav nav-underline justify-content-evenly mt-4">
  <li class="nav-item me-3">
    <Link class="nav-link fs-5" to="reactjs">Reactjs</Link>
  </li>
  <li class="nav-item me-3">
    <Link class="nav-link fs-5" to="angular">Angular</Link>
  </li>
  <li class="nav-item me-3">
    <Link class="nav-link fs-5" to="vue">Vue</Link>
  </li>
</ul>
<Outlet></Outlet>
    </div>
  )
}

export default Technologies